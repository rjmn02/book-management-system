
import { SetMetadata } from '@nestjs/common';
import { env } from 'process';

export const IS_PUBLIC_KEY = env.IS_PUBLIC_KEY;
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
