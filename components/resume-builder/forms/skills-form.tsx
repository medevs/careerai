"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash } from "lucide-react";
import { ResumeData } from "@/lib/resume-builder-types";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const skillSchema = z.object({
  name: z.string().min(1, "Skill name is required"),
  level: z.enum(["beginner", "intermediate", "advanced", "expert"]),
});

interface SkillsFormProps {
  items: ResumeData["skills"];
  onChange: (items: ResumeData["skills"]) => void;
}

export function SkillsForm({ items, onChange }: SkillsFormProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof skillSchema>>({
    resolver: zodResolver(skillSchema),
    defaultValues: {
      name: "",
      level: "intermediate",
    },
  });

  const onSubmit = (values: z.infer<typeof skillSchema>) => {
    const newItem = {
      id: editingId || crypto.randomUUID(),
      ...values,
    };

    if (editingId) {
      onChange(items.map((item) => (item.id === editingId ? newItem : item)));
    } else {
      onChange([...items, newItem]);
    }

    setIsDialogOpen(false);
    setEditingId(null);
    form.reset();
  };

  const handleEdit = (item: ResumeData["skills"][0]) => {
    setEditingId(item.id);
    form.reset(item);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    onChange(items.filter((item) => item.id !== id));
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "bg-blue-100 text-blue-800";
      case "intermediate":
        return "bg-green-100 text-green-800";
      case "advanced":
        return "bg-purple-100 text-purple-800";
      case "expert":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Skills</h3>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { setEditingId(null); form.reset(); }}>
              <Plus className="h-4 w-4 mr-2" />
              Add Skill
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingId ? "Edit Skill" : "Add Skill"}
              </DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Skill Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="level"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Proficiency Level</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                          <SelectItem value="expert">Expert</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Button type="submit">
                    {editingId ? "Save Changes" : "Add Skill"}
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 rounded-lg border"
          >
            <div className="flex items-center space-x-4">
              <div>
                <h4 className="font-medium">{item.name}</h4>
                <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(item.level)}`}>
                  {item.level.charAt(0).toUpperCase() + item.level.slice(1)}
                </span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleEdit(item)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDelete(item.id)}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}