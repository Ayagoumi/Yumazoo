import type { Theme } from '@mui/material/styles';
import { merge } from 'lodash';

import Divider from './Divider';
import MenuItem from './MenuItem';
import Paper from './Paper';
import Select from './Select';
import TextField from './TextField';

export default function ComponentsOverrides(theme: Theme) {
  return merge(TextField(theme), Divider(theme), MenuItem(theme), Select(theme), Paper());
}
