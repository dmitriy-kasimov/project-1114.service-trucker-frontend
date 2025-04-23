import { Link as ULink, Sidebar, Text } from '@project-1114/ui-kit';
import { Link } from 'react-router-dom';
import {
    getRouteCisterns,
    getRouteDumpTrucks,
    getRouteHeavyTrucks,
    getRouteVans,
} from '@/shared/const/router.ts';

const links: { label: string; link: string }[] = [
    { label: 'Фургоны', link: getRouteVans() },
    { label: 'Самосвалы', link: getRouteDumpTrucks() },
    { label: 'Тягачи', link: getRouteHeavyTrucks() },
    { label: 'Цистерны', link: getRouteCisterns() },
];

export const CustomSidebar = () => {
    return (
        <Sidebar
            items={links.map((link) => (
                <ULink key={link.label}>
                    <Link to={link.link}>
                        <Text whiteSpace={'nowrap'} color={'main'}>
                            {link.label}
                        </Text>
                    </Link>
                </ULink>
            ))}
        />
    );
};
