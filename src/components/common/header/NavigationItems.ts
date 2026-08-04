export interface NavigationItem {
  key: string
  label: string
  target: string
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    key: "upload",
    label: "Upload",
    target: "upload",
  },
  {
    key: "chat",
    label: "Chat",
    target: "chat",
  },
]
