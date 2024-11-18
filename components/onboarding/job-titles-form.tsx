"use client";

import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface JobTitlesFormProps {
  onNext: () => void;
  onBack: () => void;
  selectedTitles: string[];
  setSelectedTitles: (titles: string[]) => void;
}

const popularJobTitles = [
  "Software Engineer",
  "Product Manager",
  "Data Scientist",
  "UX Designer",
  "Marketing Manager",
  "Sales Representative",
  "Business Analyst",
  "Project Manager",
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "DevOps Engineer",
  "UI Designer",
  "Content Writer",
  "Digital Marketing Specialist",
];

export function JobTitlesForm({ 
  onNext, 
  onBack,
  selectedTitles,
  setSelectedTitles 
}: JobTitlesFormProps) {
  const [open, setOpen] = useState(false);

  const toggleTitle = (title: string) => {
    setSelectedTitles(current =>
      current.includes(title)
        ? current.filter((t) => t !== title)
        : [...current, title]
    );
  };

  const handleContinue = () => {
    if (selectedTitles.length > 0) {
      onNext();
    } else {
      alert("Please select at least one job title before continuing.");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">
          What job titles interest you?
        </h2>
        <p className="text-muted-foreground mb-4">
          Select job titles you'd like to explore
        </p>

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between"
            >
              Select job titles...
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search job titles..." />
              <CommandEmpty>No job title found.</CommandEmpty>
              <CommandGroup>
                {popularJobTitles.map((title) => (
                  <CommandItem
                    key={title}
                    onSelect={() => toggleTitle(title)}
                    className="cursor-pointer"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedTitles.includes(title)
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {title}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>

        <div className="flex flex-wrap gap-2 mt-4">
          {selectedTitles.map((title) => (
            <Badge key={title} variant="secondary" className="py-1">
              {title}
              <button
                onClick={() => toggleTitle(title)}
                className="ml-1 hover:text-destructive"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <Button variant="outline" onClick={onBack} className="flex-1">
          Back
        </Button>
        <Button onClick={handleContinue} className="flex-1">
          Continue
        </Button>
      </div>
    </div>
  );
}
