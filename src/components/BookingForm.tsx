import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const services = [
  "Wedding Photography",
  "Portrait Session",
  "Commercial Photography",
  "Event Coverage",
  "Family Session",
  "Editorial/Fashion",
];

export const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    details: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Booking Request Sent!",
      description: "We'll confirm your session within 24-48 hours.",
    });
    
    setFormData({ name: "", email: "", phone: "", service: "", details: "" });
    setDate(undefined);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-body text-sm mb-2">Full Name *</label>
          <Input
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="bg-background font-body"
          />
        </div>
        <div>
          <label className="block font-body text-sm mb-2">Email Address *</label>
          <Input
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="bg-background font-body"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-body text-sm mb-2">Phone Number</label>
          <Input
            type="tel"
            placeholder="+94 77 123-4567"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-background font-body"
          />
        </div>
        <div>
          <label className="block font-body text-sm mb-2">Service Type *</label>
          <Select
            value={formData.service}
            onValueChange={(value) => setFormData({ ...formData, service: value })}
            required
          >
            <SelectTrigger className="bg-background font-body">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service} className="font-body">
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label className="block font-body text-sm mb-2">Preferred Date *</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-body bg-background",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Select a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) => date < new Date()}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <label className="block font-body text-sm mb-2">
          Tell us about your vision
        </label>
        <Textarea
          placeholder="Share details about your event, location preferences, style inspiration, or any specific requests..."
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          rows={5}
          className="bg-background font-body resize-none"
        />
      </div>

      <Button
        type="submit"
        variant="elegant"
        size="xl"
        className="w-full"
        disabled={isSubmitting || !date || !formData.service}
      >
        {isSubmitting ? "Submitting..." : "Request Booking"}
      </Button>

      <p className="text-center text-muted-foreground font-body text-sm">
        We'll respond within 24-48 hours to confirm your session.
      </p>
    </form>
  );
};
