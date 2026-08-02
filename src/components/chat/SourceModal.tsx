import { Modal, Tag, Typography } from "antd"

import type { Source } from "../../types/chat"

const { Title, Paragraph, Text } = Typography

interface SourceModalProps {
  open: boolean
  source: Source | null
  onClose: () => void
}

const SourceModal = ({ open, source, onClose }: SourceModalProps) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={700}
      title='Retrieved Context'
    >
      {source && (
        <>
          <Title level={5}>{source.chunkId}</Title>

          <Tag color='blue'>Similarity {source.score}%</Tag>

          <Paragraph
            style={{
              marginTop: 20,
              whiteSpace: "pre-wrap",
            }}
          >
            {source.text}
          </Paragraph>

          <Text type='secondary'>Document ID: {source.documentId}</Text>
        </>
      )}
    </Modal>
  )
}

export default SourceModal
