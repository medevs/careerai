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
import { Textarea } from "@/components/ui/textarea";

const projectSchema = z.object({
  name: z.string().min(1, "Project name is required"),
  description: z.string().min(1, "Description is required"),
  url: z.string().url().optional().or(z.literal("")),
  highlights: z.array(z.string()),
});

interface ProjectsFormProps {
  items: ResumeData["projects"];
  onChange: (items: ResumeData["projects"]) => void;
}

export function ProjectsForm({ items, onChange }: ProjectsFormProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [highlight, setHighlight] = useState("");

  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: "",
      description: "",
      url: "",
      highlights: [],
    },
  });

  const onSubmit = (values: z.infer<typeof projectSchema>) => {
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

  const handleEdit = (item: ResumeData["projects"][0]) => {
    setEditingId(item.id);
    form.reset(item);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    onChange(items.filter((item) => item.id !== id));
  };

  const addHighlight = () => {
    if (!highlight.trim()) return;
    const currentHighlights = form.getValues("highlights");
    form.setValue("highlights", [...currentHighlights, highlight.trim()]);
    setHighlight("");
  };

  const removeHighlight = (index: number) => {
    const currentHighlights = form.getValues("highlights");
    form.setValue(
      "highlights",
      currentHighlights.filter((_, i) => i !== index)
    );
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Projects</h3>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { setEditingId(null); form.reset(); }}>
              <Plus className="h-4 w-4 mr-2" />
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingId ? "Edit Project" : "Add Project"}
              </DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={3} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project URL (Optional)</FormLabel>
                      <FormControl>
                        <Input {...field} type="url" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-2">
                  <FormLabel>Key Highlights</FormLabel>
                  <div className="flex gap-2">
                    <Input
                      value={highlight}
                      onChange={(e) => setHighlight(e.target.value)}
                      placeholder="Add a highlight..."
                      onKeyPress={(e) => e.key === "Enter" && addHighlight()}
                    />
                    <Button type="button" onClick={addHighlight}>
                      Add
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {form.watch("highlights").map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 rounded-lg bg-muted"
                      >
                        <span className="text-sm">{item}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeHighlight(index)}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button type="submit">
                    {editingId ? "Save Changes" : "Add Project"}
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-start justify-between p-4 rounded-lg border"
          >
            <div className="space-y-1">
              <h4 className="font-medium">{item.name}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  View Project
                </a>
              )}
              {item.highlights.length > 0 && (
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {item.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              )}
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