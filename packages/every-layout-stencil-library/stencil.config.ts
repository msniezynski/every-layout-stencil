import { Config } from '@stencil/core';

import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'every-layout-stencil-library',
  outputTargets: [
    // By default, the generated proxy components will
    // leverage the output from the `dist` target, so we
    // need to explicitly define that output alongside the
    // React target
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    reactOutputTarget({
      componentCorePackage: 'every-layout-stencil-library',
      proxiesFile: '../react-library/lib/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
  ],
};

// export const config: Config = {
//   namespace: 'every-layout-stencil-library',
//   outputTargets: [
//     {
//       type: 'dist',
//       esmLoaderPath: '../loader',
//     },
//     {
//       type: 'dist-custom-elements',
//       customElementsExportBehavior: 'auto-define-custom-elements',
//       externalRuntime: false,
//     },
//     {
//       type: 'docs-readme',
//     },
//     {
//       type: 'www',
//       serviceWorker: null, // disable service workers
//     },
//   ],
//   testing: {
//     browserHeadless: "new",
//   },
// };
