"use client";

import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ProfileForm } from "@/components/profile/profile-form";
import { NotificationList } from "@/components/notifications/notification-list";
import { ProfileCompletion } from "@/components/profile/profile-completion";
import { SkillsManager } from "@/components/profile/skills-manager";
import { ExperienceTimeline } from "@/components/profile/experience-timeline";
import { useAPI } from "@/hooks/use-api";
import { api } from "@/lib/api";

export default function ProfilePage() {
  const { data: profile, execute: loadProfile, isLoading } = useAPI(api.getProfile);

  useEffect(() => {
    loadProfile();
  }, []);

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="h-[400px] flex items-center justify-center">
          <p className="text-muted-foreground">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!profile) return null;

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Profile</h2>
          <p className="text-muted-foreground">
            Manage your profile information and career details
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6">Personal Information</h3>
            <ProfileForm
              initialData={profile}
              onSuccess={loadProfile}
            />
          </Card>
          <ProfileCompletion profile={profile} />
          <SkillsManager
            skills={profile.skills}
            onUpdate={(skills) => loadProfile()}
          />
        </div>

        <div className="space-y-6">
          <ExperienceTimeline
            experience={profile.experience}
            onUpdate={(experience) => loadProfile()}
          />
          <NotificationList />
        </div>
      </div>
    </div>
  );
}