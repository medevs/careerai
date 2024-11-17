"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Settings,
  Bell,
  Shield,
  Smartphone,
  Mail,
  Globe,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account preferences and settings
          </p>
        </div>
      </div>

      {/* Account Settings */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Account Settings</h3>
          <Settings className="h-5 w-5 text-primary" />
        </div>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-medium">Email Notifications</label>
              <p className="text-sm text-muted-foreground">
                Receive email updates about your activity
              </p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-medium">Push Notifications</label>
              <p className="text-sm text-muted-foreground">
                Get push notifications on your device
              </p>
            </div>
            <Switch />
          </div>
        </div>
      </Card>

      {/* Privacy Settings */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Privacy & Security</h3>
          <Shield className="h-5 w-5 text-primary" />
        </div>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-medium">Profile Visibility</label>
              <p className="text-sm text-muted-foreground">
                Control who can see your profile
              </p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-medium">Two-Factor Authentication</label>
              <p className="text-sm text-muted-foreground">
                Add an extra layer of security
              </p>
            </div>
            <Switch />
          </div>
        </div>
      </Card>

      {/* Connected Accounts */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Connected Accounts</h3>
          <Globe className="h-5 w-5 text-primary" />
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg border">
            <div className="flex items-center space-x-4">
              <Mail className="h-5 w-5 text-blue-500" />
              <div>
                <p className="font-medium">Google</p>
                <p className="text-sm text-muted-foreground">
                  Access with Google account
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm">Connect</Button>
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg border">
            <div className="flex items-center space-x-4">
              <Smartphone className="h-5 w-5 text-blue-500" />
              <div>
                <p className="font-medium">LinkedIn</p>
                <p className="text-sm text-muted-foreground">
                  Import profile from LinkedIn
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm">Connect</Button>
          </div>
        </div>
      </Card>

      {/* Danger Zone */}
      <Card className="p-6 border-destructive/50">
        <h3 className="text-lg font-semibold text-destructive mb-4">Danger Zone</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Once you delete your account, there is no going back. Please be certain.
        </p>
        <Button variant="destructive">Delete Account</Button>
      </Card>
    </div>
  );
}