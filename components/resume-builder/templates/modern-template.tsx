interface ModernTemplateProps {
  data: any; // Using any temporarily, should use ResumeData type
}

export function ModernTemplate({ data }: ModernTemplateProps) {
  return (
    <div className="max-w-[800px] mx-auto p-8 font-sans">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">{data.basics.name}</h1>
        <div className="text-sm text-gray-600 space-x-2">
          {data.basics.email && <span>{data.basics.email}</span>}
          {data.basics.phone && <span>• {data.basics.phone}</span>}
          {data.basics.location && <span>• {data.basics.location}</span>}
          {data.basics.website && (
            <span>
              • <a href={data.basics.website} className="text-blue-600">{data.basics.website}</a>
            </span>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.basics.summary && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2 text-gray-800">Professional Summary</h2>
          <p className="text-gray-700">{data.basics.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Experience</h2>
          <div className="space-y-4">
            {data.experience.map((exp: any) => (
              <div key={exp.id}>
                <h3 className="font-bold">{exp.position}</h3>
                <div className="text-gray-600">
                  {exp.company} • {new Date(exp.startDate).getFullYear()} -{" "}
                  {exp.current ? "Present" : new Date(exp.endDate).getFullYear()}
                </div>
                <p className="text-gray-700 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Education</h2>
          <div className="space-y-4">
            {data.education.map((edu: any) => (
              <div key={edu.id}>
                <h3 className="font-bold">{edu.degree}</h3>
                <div className="text-gray-600">
                  {edu.institution} • {edu.field}
                </div>
                <div className="text-gray-600">
                  {new Date(edu.startDate).getFullYear()} -{" "}
                  {new Date(edu.endDate).getFullYear()}
                </div>
                {edu.gpa && <div className="text-gray-600">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill: any) => (
              <span
                key={skill.id}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}