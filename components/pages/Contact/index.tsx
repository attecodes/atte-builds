import React, { useState } from "react";

import { NextPage } from "next";

import {
  Section,
  Text,
  PageHead,
  Navigation,
  Footer,
  FormInput,
  FormSubmit,
} from "components";
import { useForm } from "react-hook-form";

import * as styles from "./styles";

export const Contact: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (formData: any) => {
    try {
      setIsLoading(true);
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // success
      setIsLoading(false);
      setSuccess("Thanks for reaching out, I will contact you shortly!");
    } catch {
      // error
      setIsLoading(false);
      setError("Something went wrong. We'll fix it soon!");
    }
  };
  return (
    <>
      <PageHead
        title="SD Finish"
        mediaTitle="SD Finish"
        metaDescription="Contact SD Finish"
      />
      <Navigation activePage="Contact Us" />
      <Section variant="gray" firstSection>
        <div className={styles.section}>
          <Text t="h1" align="center">
            Contact Us
          </Text>
          <Text t="h3">Start a conversation with us!</Text>
          <Text t="body2">
            We are here to help you with your woodworking needs. Whether you
            have a question about our services, want to discuss a project, or
            need assistance with something specific, feel free to reach out.
          </Text>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="name">
              <FormInput
                {...register("fullName", { required: true })}
                label="Full Name"
                placeholder="Full Name"
                errors={errors.firstName && "Name required"}
              />
            </div>
            <FormInput
              {...register("email", { required: true })}
              type="email"
              label="Email"
              placeholder="Email"
              errors={errors.email && "Email required"}
            />
            <FormInput
              type="tel"
              label="Mobile Number"
              placeholder="Mobile number"
              {...register("mobileNumber", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
              errors={
                errors.mobileNumber?.type === "minLength" ||
                errors.mobileNumber?.type === "maxLength"
                  ? "Example format: 222-333-4444"
                  : errors.mobileNumber?.type === "required"
                  ? "Mobile number required"
                  : undefined
              }
            />

            <FormInput
              {...register("briefDescription", {
                required: true,
                minLength: 6,
                maxLength: 150,
              })}
              label="Message"
              placeholder="Enter your message"
              errors={
                errors.briefDescription?.type === "minLength" ||
                errors.briefDescription?.type === "maxLength"
                  ? "Enter description between 6-150 characters"
                  : errors.briefDescription?.type === "required"
                  ? "Enter description between 6-150 characters"
                  : undefined
              }
            />

            {isLoading && <Text t="caption">loading...</Text>}
            {success && (
              <>
                <Text t="caption" color="success">
                  {success}
                </Text>
              </>
            )}
            {error && (
              <Text t="caption" color="danger">
                {error}
              </Text>
            )}
            {!success && (
              <FormSubmit disabled={!!success || !!error || isLoading} />
            )}
          </form>
          <div className="card">
            <Text t="h3">Contact Information</Text>
            <Text t="body2">Address: San Diego County</Text>
            <Text t="body2">Phone: 619.246.0025</Text>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
};
