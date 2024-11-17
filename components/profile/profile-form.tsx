"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { UserProfile } from "@/lib/types";
import { useAPI } from "@/hooks/use-api";
import { api } from "@/lib/api";
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
import { toast } from "sonner";

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  title: z.string().optional(),
  bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
  location: z.string().optional(),
  skills: z.array(z.string()),
});

interface ProfileFormProps {
  initialData: Partial<UserProfile>;
  onSuccess?: (data: UserProfile) => void;
}

export function ProfileForm({ initialData, onSuccess }: ProfileFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  
  const { execute: updateProfile, isLoading } = useAPI(api.updateProfile, {
    onSuccess: (data) => {
      toast.success("Profile updated successfully");
      setIsEditing(false);
      onSuccess?.(data);
    },
  });

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: initialData.name || "",
      title: initialData.title || "",
      bio: initialData.bio || "",
      location: initialData.location || "",
      skills: initialData.skills || [],
    },
  });

  async function onSubmit(values: z.infer<typeof profileSchema>) {
    await updateProfile(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} disabled={!isEditing} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Professional Title</FormLabel>
              <FormControl>
                <Input {...field} disabled={!isEditing} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  disabled={!isEditing}
                  className="resize-none"
                  rows={4}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input {...field} disabled={!isEditing} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end space-x-2">
          {isEditing ? (
            <>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEditing(false)}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </>
          ) : (
            <Button type="button" onClick={() => setIsEditing(true)}>
              Edit Profile
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}