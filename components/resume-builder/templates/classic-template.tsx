interface ClassicTemplateProps {
  data: any; // Using any temporarily, should use ResumeData type
}

export function ClassicTemplate({ data }: ClassicTemplateProps) {
  return (
    <div className="max-w-[800px] mx-auto p-8 font-serif">
      {/* Header */}
      <div className="text-center border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-3xl font-bold mb-2">{data.basics.name}</h1>
        <div className="text-sm space-x-2">
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
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase mb-2 border-b border-gray-300">
            Professional Summary
          </h2>
          <p className="text-justify">{data.basics.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase mb-2 border-b border-gray-300">
            Professional Experience
          </h2>
          <div className="space-y-4">
            {data.experience.map((exp: any) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">{exp.position}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <p className="text-gray-600">
                    {new Date(exp.startDate).getFullYear()} -{" "}
                    {exp.current ? "Present" : new Date(exp.endDate).getFullYear()}
                  </p>
                </div>
                <p className="mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase mb-2 border-b border-gray-300">
            Education
          </h2>
          <div className="space-y-4">
            {data.education.map((edu: any) => (
              <div key={edu.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-gray-600">{edu.field}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">
                      {new Date(edu.startDate).getFullYear()} -{" "}
                      {new Date(edu.endDate).getFullYear()}
                    </p>
                    {edu.gpa && <p className="text-gray-600">GPA: {edu.gpa}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase mb-2 border-b border-gray-300">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill: any) => (
              <span
                key={skill.id}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded"
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