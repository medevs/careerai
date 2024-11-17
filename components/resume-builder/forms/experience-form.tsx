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
import { Switch } from "@/components/ui/switch";

const experienceSchema = z.object({
  company: z.string().min(1, "Company is required"),
  position: z.string().min(1, "Position is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().optional(),
  current: z.boolean(),
  description: z.string().min(1, "Description is required"),
});

interface ExperienceFormProps {
  items: ResumeData["experience"];
  onChange: (items: ResumeData["experience"]) => void;
}

export function ExperienceForm({ items, onChange }: ExperienceFormProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof experienceSchema>>({
    resolver: zodResolver(experienceSchema),
    defaultValues: {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    },
  });

  const onSubmit = (values: z.infer<typeof experienceSchema>) => {
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

  const handleEdit = (item: ResumeData["experience"][0]) => {
    setEditingId(item.id);
    form.reset(item);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    onChange(items.filter((item) => item.id !== id));
  };

  return (
    <Card className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h3 className="text-lg font-semibold">Experience</h3>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { setEditingId(null); form.reset(); }}>
              <Plus className="h-4 w-4 mr-2" />
              Add Experience
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>
                {editingId ? "Edit Experience" : "Add Experience"}
              </DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Company</FormLabel>
                      <FormControl>
                        <Input {...field} className="w-full" />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Position</FormLabel>
                      <FormControl>
                        <Input {...field} className="w-full" />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Start Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} className="w-full" />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">End Date</FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            {...field}
                            disabled={form.watch("current")}
                            className="w-full"
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="current"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between">
                      <FormLabel className="text-sm font-medium">Current Position</FormLabel>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={4} className="w-full" />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Button type="submit">
                    {editingId ? "Save Changes" : "Add Experience"}
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
            <div>
              <h4 className="font-medium">{item.position}</h4>
              <p className="text-sm text-muted-foreground">{item.company}</p>
              <p className="text-sm text-muted-foreground">
                {new Date(item.startDate).toLocaleDateString()} -{" "}
                {item.current
                  ? "Present"
                  : new Date(item.endDate!).toLocaleDateString()}
              </p>
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