"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, X } from "lucide-react";
import { useAPI } from "@/hooks/use-api";
import { api } from "@/lib/api";
import { toast } from "sonner";

interface SkillsManagerProps {
  skills: string[];
  onUpdate: (skills: string[]) => void;
}

export function SkillsManager({ skills, onUpdate }: SkillsManagerProps) {
  const [newSkill, setNewSkill] = useState("");
  const { execute: updateProfile, isLoading } = useAPI(api.updateProfile);

  const addSkill = async () => {
    if (!newSkill.trim()) return;
    
    const updatedSkills = [...skills, newSkill.trim()];
    try {
      await updateProfile({ skills: updatedSkills });
      onUpdate(updatedSkills);
      setNewSkill("");
      toast.success("Skill added successfully");
    } catch (error) {
      toast.error("Failed to add skill");
    }
  };

  const removeSkill = async (skillToRemove: string) => {
    const updatedSkills = skills.filter(skill => skill !== skillToRemove);
    try {
      await updateProfile({ skills: updatedSkills });
      onUpdate(updatedSkills);
      toast.success("Skill removed successfully");
    } catch (error) {
      toast.error("Failed to remove skill");
    }
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Skills</h3>
      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Add a skill..."
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addSkill()}
        />
        <Button onClick={addSkill} disabled={isLoading}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="px-3 py-1">
            {skill}
            <button
              onClick={() => removeSkill(skill)}
              className="ml-2 hover:text-destructive"
            >
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}
      </div>
    </Card>
  );
}