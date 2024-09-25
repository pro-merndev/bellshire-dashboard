'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  email: z.string().email({ message: 'Enter a valid email address' }),
  terms: z.boolean(),
  password: z.string().min(6)
});
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import Link from 'next/link';
import { Switch } from '../ui/switch';

type UserFormValue = z.infer<typeof formSchema>;

export default function UserAuthForm() {
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');
  const [loading] = useState(false);
  const defaultValues = {
    email: ''
  };
  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const onSubmit = async (data: UserFormValue) => {
    signIn('credentials', {
      email: data.email,
      callbackUrl: callbackUrl ?? '/dashboard'
    });
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-4 font-poppins text-xs font-light tracking-wide">
                  Adresse mail
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email"
                    disabled={loading}
                    {...field}
                    className="h-auto rounded-lg border-[0.5px] border-[#E5E5E5] py-3 text-sm text-[#B5B5B5] md:text-base"
                    style={{
                      background:
                        'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)'
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-4 font-poppins text-xs font-light tracking-wide">
                  Mot de passe
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Entrez votre mot de passe"
                      disabled={loading}
                      {...field}
                      className="h-auto rounded-lg border-[0.5px] border-[#E5E5E5] py-3 text-sm text-[#B5B5B5] md:text-base"
                      style={{
                        background:
                          'radial-gradient(117.2% 352.94% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0) 100%)'
                      }}
                    />
                    <Button
                      type="button"
                      variant="none"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword((prev) => !prev)}
                      disabled={loading}
                    >
                      {showPassword && !loading ? (
                        <EyeIcon
                          className="h-4 w-4"
                          aria-hidden="true"
                          color="#4D4D4D"
                        />
                      ) : (
                        <EyeOffIcon
                          className="h-4 w-4"
                          aria-hidden="true"
                          color="#4D4D4D"
                        />
                      )}
                      <span className="sr-only">
                        {showPassword ? 'Hide password' : 'Show password'}
                      </span>
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between">
            <div>
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative flex items-center gap-2">
                        <Switch
                          defaultChecked={true}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-[0.5px] border-[#E5E5E5]"
                          style={{
                            background:
                              'linear-gradient(90deg, #949494 0%, #191919 100%)'
                          }}
                        />
                        <FormLabel className="text-xs tracking-wide text-[#E4E4E4AF]">
                          Se souvenir de moi
                        </FormLabel>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Link href="#" className="text-xs text-[#007AFF]">
              Mot de passe oublié ?
            </Link>
          </div>
          <Button
            variant={'none'}
            disabled={loading}
            className="h-auto w-full py-3 font-roboto text-white"
            type="submit"
            style={{
              background: 'linear-gradient(90deg, #949494 0%, #191919 100%)'
            }}
          >
            Se connecter
          </Button>
        </form>
      </Form>
    </>
  );
}
