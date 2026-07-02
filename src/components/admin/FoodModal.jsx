"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import PrimaryButton from "@/components/ui/primaryButton";

const emptyValues = {
  name: "",
  category: "",
  price: "",
  description: "",
  image: "",
  featured: false,
  available: true,
};

export default function FoodModal({ isOpen, food, onClose, onSubmit }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: emptyValues,
  });

  useEffect(() => {
    if (isOpen) {
      reset(food ?? emptyValues);
    }
  }, [food, isOpen, reset]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(13,26,24,0.72)] p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[32px] bg-[#fbf8f1] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.28)] sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-primary)]">
              {food ? "Edit Food" : "Add Food"}
            </p>
            <h2 className="mt-2 font-[var(--font-playfair)] text-3xl text-[var(--color-primary-dark)]">
              {food ? `Update ${food.name}` : "Create a new menu item"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[rgba(31,75,67,0.14)] p-2 text-[var(--color-primary)] transition hover:bg-white"
          >
            <X size={18} />
          </button>
        </div>

        <form
          className="mt-8 space-y-5"
          onSubmit={handleSubmit(async (values) => {
            await onSubmit(values);
            reset(emptyValues);
          })}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Food Name"
              error={errors.name?.message}
              input={
                <input
                  {...register("name", { required: "Food name is required." })}
                  className="w-full rounded-2xl border border-[rgba(31,75,67,0.12)] bg-white px-4 py-3 outline-none transition focus:border-[var(--color-gold)]"
                />
              }
            />
            <Field
              label="Category"
              error={errors.category?.message}
              input={
                <input
                  {...register("category", {
                    required: "Category is required.",
                  })}
                  className="w-full rounded-2xl border border-[rgba(31,75,67,0.12)] bg-white px-4 py-3 outline-none transition focus:border-[var(--color-gold)]"
                />
              }
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Price"
              error={errors.price?.message}
              input={
                <input
                  {...register("price", { required: "Price is required." })}
                  placeholder="EUR 24"
                  className="w-full rounded-2xl border border-[rgba(31,75,67,0.12)] bg-white px-4 py-3 outline-none transition focus:border-[var(--color-gold)]"
                />
              }
            />
            <Field
              label="Image URL"
              error={errors.image?.message}
              input={
                <input
                  {...register("image", {
                    required: "Image URL is required.",
                  })}
                  placeholder="/images/menu/..."
                  className="w-full rounded-2xl border border-[rgba(31,75,67,0.12)] bg-white px-4 py-3 outline-none transition focus:border-[var(--color-gold)]"
                />
              }
            />
          </div>

          <Field
            label="Description"
            error={errors.description?.message}
            input={
              <textarea
                {...register("description", {
                  required: "Description is required.",
                })}
                rows={4}
                className="w-full rounded-[24px] border border-[rgba(31,75,67,0.12)] bg-white px-4 py-3 outline-none transition focus:border-[var(--color-gold)]"
              />
            }
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex items-center gap-3 rounded-2xl border border-[rgba(31,75,67,0.12)] bg-white px-4 py-3 text-sm text-[var(--color-ink)]">
              <input type="checkbox" {...register("featured")} />
              Featured item
            </label>
            <label className="flex items-center gap-3 rounded-2xl border border-[rgba(31,75,67,0.12)] bg-white px-4 py-3 text-sm text-[var(--color-ink)]">
              <input type="checkbox" {...register("available")} />
              Available for guests
            </label>
          </div>

          <div className="flex flex-wrap justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-[rgba(31,75,67,0.14)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)] transition hover:bg-white"
            >
              Cancel
            </button>
            <PrimaryButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : food ? "Update Food" : "Add Food"}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, input, error }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[var(--color-primary-dark)]">
        {label}
      </label>
      {input}
      {error ? <p className="mt-2 text-sm text-[#b34b3f]">{error}</p> : null}
    </div>
  );
}
