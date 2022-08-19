import React from 'react'
import { SidebarContainer } from './style'

interface isOpenProps {
  isOpen: Boolean;
}

export default function Sidebar({ isOpen }: isOpenProps) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <span>test</span>
      <span>test</span>
      <span>test</span>
      <span>test</span>
    </SidebarContainer>
  )
}
