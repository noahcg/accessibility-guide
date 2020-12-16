import { addons } from '@storybook/addons';
import myTheme from './theme';
import "tailwindcss/tailwind.css"

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: false,
  theme: myTheme,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  showRoots: true,
});