"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface SkillsFormProps {
  onNext: () => void;
  skills: string[];
  setSkills: (skills: string[]) => void;
}

export function SkillsForm({ onNext, skills, setSkills }: SkillsFormProps) {
  const [inputValue, setInputValue] = useState("");

  const addSkill = () => {
    if (inputValue.trim() && !skills.includes(inputValue.trim())) {
      setSkills([...skills, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  const handleContinue = () => {
    if (skills.length > 0) {
      onNext();
    } else {
      alert("Please add at least one skill before continuing.");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">What are your key skills?</h2>
        <p className="text-muted-foreground mb-4">
          Add your professional skills and expertise
        </p>

        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a skill and press Enter"
              className="flex-1"
            />
            <Button onClick={addSkill}>Add</Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="py-1">
                {skill}
                <button
                  onClick={() => removeSkill(skill)}
                  className="ml-1 hover:text-destructive"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <Button onClick={handleContinue} className="w-full">
        Continue
      </Button>
    </div>
  );
}
