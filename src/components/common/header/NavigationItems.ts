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
    key: "documents",
    label: "Documents",
    target: "document",
  },
  {
    key: "chat",
    label: "Chat",
    target: "chat",
  },
]
