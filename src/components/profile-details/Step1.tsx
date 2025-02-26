"use client";

import { CircleUserRound } from "lucide-react";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Step1 = () => {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start justify-center pt-8 pb-4">
        <h2 className="text-2xl font-semibold">Add profile details</h2>
        <h4 className="text-sm text-stone-gray">Enter essential information</h4>
      </div>

      <Label className="text-sm font-medium">Photo</Label>
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 flex justify-center items-center rounded-xl bg-gray-100 overflow-hidden border">
          {image ? (
            <img
              src={image}
              alt="Uploaded"
              className="w-full h-full object-cover"
            />
          ) : (
            <CircleUserRound size={50} className="text-gray-400" />
          )}
        </div>
        <div>
          <p className="text-sm text-gray-500">
            For the best results on all devices, use an image that’s at least
            800 x 800 pixels and 6MB or less.
          </p>
          <Button
            size="lg"
            className="mt-2 bg-stone-light-gray hover:bg-stone-gray text-white"
            onClick={handleButtonClick}
          >
            Upload Photo
          </Button>
          <Input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
      </div>

      <div>
        <Label>Name *</Label>
        <Input type="text" placeholder="Enter name" />
      </div>

      <div>
        <Label>Email Address *</Label>
        <Input type="email" placeholder="name@domain.com" />
      </div>

      <div>
        <Label>Phone Number *</Label>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-24">
              <SelectValue placeholder="+503" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="+503">+503</SelectItem>
            </SelectContent>
          </Select>
          <Input type="tel" placeholder="0000 - 0000" />
        </div>
      </div>

      {/* Rol */}
      <div>
        <Label>Role</Label>
        <Input type="text" placeholder="Enter role" />
      </div>
    </div>
  );
};

export default Step1;
