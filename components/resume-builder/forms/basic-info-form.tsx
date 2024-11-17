"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import { ResumeData } from "@/lib/resume-builder-types";

const basicInfoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  location: z.string().min(1, "Location is required"),
  website: z.string().url().optional().or(z.literal("")),
  summary: z.string().min(1, "Professional summary is required"),
});

interface BasicInfoFormProps {
  data: ResumeData["basics"];
  onChange: (data: ResumeData["basics"]) => void;
}

export function BasicInfoForm({ data, onChange }: BasicInfoFormProps) {
  const form = useForm<z.infer<typeof basicInfoSchema>>({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: data,
  });

  return (
    <Card className="p-4 sm:p-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onChange)}
          className="space-y-4 sm:space-y-6"
          onChange={() => form.handleSubmit(onChange)()}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">Full Name</FormLabel>
                <FormControl>
                  <Input {...field} className="w-full" />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Email</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" className="w-full" />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Phone</FormLabel>
                  <FormControl>
                    <Input {...field} type="tel" className="w-full" />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Location</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full" />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Website (Optional)</FormLabel>
                  <FormControl>
                    <Input {...field} type="url" className="w-full" />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="summary"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">Professional Summary</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={4}
                    className="w-full"
                    placeholder="Write a brief summary of your professional background and key qualifications..."
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </Card>
  );
}