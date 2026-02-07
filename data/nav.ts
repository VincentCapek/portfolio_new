export type NavItem =
    | { label: string; to: string }
    | { label: string; children: { label: string; to: string }[] }

export const navItems: NavItem[] = [
    { label: 'Services', to: '/#services' },
    { label: 'Resume', to: '/#resume' },
    { label: 'Works', to: '/#works' },
    { label: 'Skills', to: '/#skills' },
    { label: 'Testimonials', to: '/#testimonials' },
    { label: 'Contact', to: '/#contact' },
]
