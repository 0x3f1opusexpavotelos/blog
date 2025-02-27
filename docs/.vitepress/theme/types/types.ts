

export interface Permalink {
  /** 链接的 URL。 */
  link?: string
  /** 链接的标题。 */
  title: string
  /** 链接的内容。 */
  content?: string
  /** 日期 */
  date?: string
  /** 日期文本 */
  dateText?: string
  /** 日期图标 */
  dateIcon?: string
  /** 复制开关 */
  copy?: boolean
  /** 复制的内容 */
  install?: string
}


export interface BioLink {

}


export interface PortfolioLink {

}

export interface PublicSecurityRegistration {
  /** Internet Content Provider */
  icp: string
  icpIcon?: string
  /**  ministry of public security */
  mps: string
  mpsIcon?: string
}

export interface FooterLink {
  icon?: string
  url: string
  name: string
}

export interface FooterGroup {
  icon?: string
  title: string
  links: FooterLink[]
}

export interface FooterData {
  groups: FooterGroup[];
  record: PublicSecurityRegistration;
  author: {
    name: string;
    link: string;
  }
}


/* type.ts */
export interface INavLink {

  icon?: string | { symbolId: string };
  badge?:
  | string
  | {
    text: string
    type: 'info' | 'tip' | 'warning' | 'danger'
  }
  title: string
  desc?: string
  link: string
}

export interface NavData {
  title: string
  items: INavLink[]
}

/**
 * Site Nav
 */
export interface SiteNavItem {
  /** 站点图标 */
  icon?: string
  badge?:
  | string
  | {
    text?: string
    type?: 'info' | 'tip' | 'warning' | 'danger'
  }
  /** 站点名称 */
  title: string
  /** 站点名称 */
  desc?: string
  /** 站点链接 */
  link: string
}

export interface SiteNavSection {
  title: string
  items: SiteNavItem[]
}
