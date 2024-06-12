import Home from '@/pages/Home'

const modules = import.meta.glob('@/pages/**/index.jsx', { eager: true, import: 'default' })
const router = Object.keys(modules).map((key, value) => {
    const path = key.replace('/src/pages', '').replace('/index.jsx', '')
    return {
        path,
        Component: modules[key],
    }
})
router.push({
    path: '/',
    index: true,
    Component: Home,
})
export default router