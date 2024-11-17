import { ResumeAnalysis } from '@/components/resume/resume-analysis';
import { ResumeUploader } from '@/components/resume/resume-uploader';
import { ResumeScore } from '@/components/resume/resume-score';
import { ResumeSuggestions } from '@/components/resume/resume-suggestions';

export default function ResumePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Resume Analysis</h2>
          <p className="text-muted-foreground">
            Upload your resume to get detailed feedback and suggestions.
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <ResumeUploader />
        <ResumeScore />
      </div>
      <ResumeAnalysis />
      <ResumeSuggestions />
    </div>
  );
}