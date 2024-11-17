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

const certificationSchema = z.object({
  name: z.string().min(1, "Certification name is required"),
  issuer: z.string().min(1, "Issuer is required"),
  date: z.string().min(1, "Date is required"),
  url: z.string().url().optional().or(z.literal("")),
});

interface CertificationsFormProps {
  items: ResumeData["certifications"];
  onChange: (items: ResumeData["certifications"]) => void;
}

export function CertificationsForm({ items, onChange }: CertificationsFormProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof certificationSchema>>({
    resolver: zodResolver(certificationSchema),
    defaultValues: {
      name: "",
      issuer: "",
      date: "",
      url: "",
    },
  });

  const onSubmit = (values: z.infer<typeof certificationSchema>) => {
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

  const handleEdit = (item: ResumeData["certifications"][0]) => {
    setEditingId(item.id);
    form.reset(item);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    onChange(items.filter((item) => item.id !== id));
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Certifications</h3>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { setEditingId(null); form.reset(); }}>
              <Plus className="h-4 w-4 mr-2" />
              Add Certification
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingId ? "Edit Certification" : "Add Certification"}
              </DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Certification Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="issuer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Issuing Organization</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date Earned</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
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
                      <FormLabel>Credential URL (Optional)</FormLabel>
                      <FormControl>
                        <Input type="url" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Button type="submit">
                    {editingId ? "Save Changes" : "Add Certification"}
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
              <h4 className="font-medium">{item.name}</h4>
              <p className="text-sm text-muted-foreground">{item.issuer}</p>
              <p className="text-sm text-muted-foreground">
                {new Date(item.date).toLocaleDateString()}
              </p>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  View Credential
                </a>
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