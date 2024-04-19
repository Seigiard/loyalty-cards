import type { SizeLimitConfig } from 'size-limit';

module.exports = [
  {
    limit: '100 kB',
    path: ['dist/**/*.*'],
    brotli: true,
  },
] as SizeLimitConfig;
