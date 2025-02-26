"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ChevronDown, CircleUserRound, Phone } from "lucide-react";
import { forwardRef, useRef, useState } from "react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

type CountrySelectProps = {
  disabled?: boolean;
  value: RPNInput.Country;
  onChange: (value: RPNInput.Country) => void;
  options: { label: string; value: RPNInput.Country | undefined }[];
};

export const CountrySelect = ({
  disabled,
  value,
  onChange,
  options,
}: CountrySelectProps) => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as RPNInput.Country);
  };

  return (
    <div className="relative inline-flex items-center self-stretch rounded-s-lg border py-2 pe-2 ps-3 border-white text-muted-foreground transition-shadow z-10 border-ring ring-[3px] ring-ring/20 hover:bg-accent hover:text-foreground has-[:disabled]:pointer-events-none has-[:disabled]:opacity-50">
      <div className="inline-flex items-center gap-1" aria-hidden="true">
        <FlagComponent country={value} countryName={value} aria-hidden="true" />
        <span className="text-muted-foreground/80">
          <ChevronDown
            size={16}
            strokeWidth={2}
            aria-hidden="true"
            color="white"
          />
        </span>
      </div>
      <select
        disabled={disabled}
        value={value}
        onChange={handleSelect}
        className="absolute inset-0 text-sm opacity-0"
        aria-label="Select country"
      >
        <option key="default" value="">
          Select a country
        </option>
        {options
          .filter((x) => x.value)
          .map((option, i) => (
            <option key={option.value ?? `empty-${i}`} value={option.value}>
              {option.label}{" "}
              {option.value &&
                `+${RPNInput.getCountryCallingCode(option.value)}`}
            </option>
          ))}
      </select>
    </div>
  );
};

export const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country];

  return (
    <span className="w-5 overflow-hidden rounded-sm">
      {Flag ? (
        <Flag title={countryName} />
      ) : (
        <Phone size={16} aria-hidden="true" color="white" />
      )}
    </span>
  );
};
export const PhoneInput = forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, ...props }, ref) => {
  return (
    <Input
      className={cn(
        "-ms-px rounded-s-none shadow-none focus-visible:z-10",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

export const Step1 = () => {
  const [image, setImage] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>(undefined); // Estado para el número de teléfono
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
        <Label>Name <span className="text-destructive">*</span></Label>
        <Input type="text" placeholder="Enter name" />
      </div>

      <div>
        <Label>Email Address <span className="text-destructive">*</span></Label>
        <Input type="email" placeholder="name@domain.com" />
      </div>

      <div className="space-y-2">
        <div className="space-y-2">
          <Label htmlFor="input-02">
            Phone number <span className="text-destructive">*</span>
          </Label>
          <RPNInput.default
            className="flex rounded-lg shadow-sm shadow-black/5 bg-[#191E21]"
            international
            flagComponent={FlagComponent}
            countrySelectComponent={CountrySelect}
            inputComponent={PhoneInput}
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(newValue) => setPhoneNumber(newValue ?? "")}
          />
        </div>
      </div>

      <div>
        <Label>Role</Label>
        <Input type="text" placeholder="Enter role" />
      </div>
    </div>
  );
};

export default Step1;
