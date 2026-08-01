export interface NavigationItem {
  key: string
  label: string
  target: string
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    key: "upload",
    label: "Upload",
    target: "upload-section",
  },
  {
    key: "documents",
    label: "Documents",
    target: "document-section",
  },
  {
    key: "chat",
    label: "Chat",
    target: "chat-section",
  },
  {
    key: "workflow",
    label: "Workflow",
    target: "workflow-section",
  },
]
