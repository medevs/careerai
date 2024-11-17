interface CreativeTemplateProps {
  data: any; // Using any temporarily, should use ResumeData type
}

export function CreativeTemplate({ data }: CreativeTemplateProps) {
  return (
    <div className="max-w-[800px] mx-auto p-8 font-sans bg-gradient-to-br from-primary/5 to-transparent">
      {/* Header */}
      <div className="relative mb-12 pb-4">
        <div className="absolute top-0 left-0 w-24 h-24 bg-primary/10 rounded-full -z-10" />
        <h1 className="text-4xl font-bold mb-2">{data.basics.name}</h1>
        <div className="flex flex-wrap gap-3 text-sm">
          {data.basics.email && (
            <span className="bg-primary/10 px-3 py-1 rounded-full">
              {data.basics.email}
            </span>
          )}
          {data.basics.phone && (
            <span className="bg-primary/10 px-3 py-1 rounded-full">
              {data.basics.phone}
            </span>
          )}
          {data.basics.location && (
            <span className="bg-primary/10 px-3 py-1 rounded-full">
              {data.basics.location}
            </span>
          )}
          {data.basics.website && (
            <a
              href={data.basics.website}
              className="bg-primary/10 px-3 py-1 rounded-full hover:bg-primary/20 transition-colors"
            >
              {data.basics.website}
            </a>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.basics.summary && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="w-8 h-8 bg-primary/10 rounded-full mr-2" />
            About Me
          </h2>
          <p className="text-lg leading-relaxed">{data.basics.summary}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {/* Experience */}
          {data.experience.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 bg-primary/10 rounded-full mr-2" />
                Experience
              </h2>
              <div className="space-y-8">
                {data.experience.map((exp: any) => (
                  <div key={exp.id} className="relative pl-6 border-l-2 border-primary/20">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary/20 rounded-full" />
                    <h3 className="font-bold text-lg">{exp.position}</h3>
                    <p className="text-primary/80 mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      {new Date(exp.startDate).getFullYear()} -{" "}
                      {exp.current ? "Present" : new Date(exp.endDate).getFullYear()}
                    </p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 bg-primary/10 rounded-full mr-2" />
                Education
              </h2>
              <div className="space-y-6">
                {data.education.map((edu: any) => (
                  <div key={edu.id} className="relative pl-6 border-l-2 border-primary/20">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary/20 rounded-full" />
                    <h3 className="font-bold text-lg">{edu.degree}</h3>
                    <p className="text-primary/80">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(edu.startDate).getFullYear()} -{" "}
                      {new Date(edu.endDate).getFullYear()}
                    </p>
                    <p className="text-gray-600">{edu.field}</p>
                    {edu.gpa && <p className="text-gray-600">GPA: {edu.gpa}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          {/* Skills */}
          {data.skills.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 bg-primary/10 rounded-full mr-2" />
                Skills
              </h2>
              <div className="space-y-2">
                {data.skills.map((skill: any) => (
                  <div
                    key={skill.id}
                    className="p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    <p className="font-medium">{skill.name}</p>
                    <div className="w-full h-1 bg-primary/10 rounded-full mt-1">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{
                          width: `${
                            skill.level === "expert"
                              ? "100%"
                              : skill.level === "advanced"
                              ? "75%"
                              : skill.level === "intermediate"
                              ? "50%"
                              : "25%"
                          }`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}