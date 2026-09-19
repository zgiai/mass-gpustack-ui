import ZGPLogoDark from '@/assets/images/zgp-logo-dark.png';
import ZGPLogo from '@/assets/images/zgp-logo.png';
import ZGPMiniDark from '@/assets/images/zgp-mini-dark.png';
import ZGPMini from '@/assets/images/zgp-mini.png';
import useUserSettings from '@/hooks/use-user-settings';
import { getGPUStackPlugin } from '@/plugins';

const useLogo = () => {
  const { isDarkTheme, userSettings } = useUserSettings();

  const enterprisePlugin = getGPUStackPlugin();
  const resolved =
    enterprisePlugin?.branding?.resolveLogos?.(userSettings, isDarkTheme) ?? {};

  return {
    sidebarLogo: resolved.sidebarLogo || (isDarkTheme ? ZGPLogoDark : ZGPLogo),
    miniLogo: resolved.miniLogo || (isDarkTheme ? ZGPMiniDark : ZGPMini)
  };
};

export { useLogo };
