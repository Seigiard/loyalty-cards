import type { SizeLimitConfig } from 'size-limit';

module.exports = [
  {
    limit: '80 kB',
    path: ['dist/**/*.*'],
    brotli: true,
  },
] as SizeLimitConfig;
