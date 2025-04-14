import { Link as ULink, Sidebar, Text } from '@project-1114/ui-kit';
import { Link } from 'react-router-dom';

const links: string[] = ['Vans', 'Dump trucks', 'Heavy trucks', 'Cisterns'];
export const CustomSidebar = () => {
    return (
        <Sidebar
            items={links.map((link) => (
                <ULink>
                    <Link to={'/'}>
                        <Text whiteSpace={'nowrap'} color={'main'}>
                            {link}
                        </Text>
                    </Link>
                </ULink>
            ))}
        />
    );
};
