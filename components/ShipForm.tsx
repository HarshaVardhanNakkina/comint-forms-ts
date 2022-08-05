import { Button, Spinner } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import { saveFormData } from '../shared/libs/forms';

const schema = yup
  .object({
    email: yup.string().email().required(),
    date: yup.date().required(),
    favorite_color: yup.string().max(15).required(),
  })
  .required();

export default function ShipForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const fields = [
    { type: 'email', name: 'email', required: true, label: 'Email', autoComplete: 'email' },
    { type: 'date', name: 'date', required: true, label: 'Date' },
    { type: 'text', name: 'favorite_color', required: false, label: 'Favorite color' },
  ];
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(saveFormData)}>
      {fields.map((field) => {
        return (
          <>
            <label>
              <span className="block font-bold">{field.label}:</span>
              <input
                type={field.type}
                className="p-1 border border-gray-300 rounded-sm broder-solid"
                {...register(field.name, { required: field.required ?? false })}
              />
              <p className='text-red-500 text-md'>{errors?.[field.name]?.message as any}</p>
            </label>
          </>
        );
      })}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Spinner />
            <span className="pl-3">Submitting...</span>
          </>
        ) : (
          'Submit'
        )}
      </Button>
    </form>
  );
}
