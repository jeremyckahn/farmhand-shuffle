import { SxProps } from '@mui/material/styles/index.js';
import { Theme } from '@mui/material/styles/createTheme';
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx';
export declare const isSxArray: (sx: SxProps<Theme>) => sx is ReadonlyArray<boolean | SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>)>;
