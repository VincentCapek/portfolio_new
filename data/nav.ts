export type NavItem =
    | { label: string; to: string }
    | { label: string; children: { label: string; to: string }[] }

export const navItems: NavItem[] = [
    { label: 'Services', to: '/#services' },
    { label: 'Expertise', to: '/#expertise' },
    { label: 'Works', to: '/#portfolio' },
    { label: 'Skills', to: '/#skills' },
    { label: 'Approach', to: '/#approach' },
    { label: 'Contact', to: '/#contact' },
]
