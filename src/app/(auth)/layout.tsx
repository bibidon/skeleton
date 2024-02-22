import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function AuthLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <Box component="div" sx={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box component="div" sx={{
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#ED6C02',
                alignItems: 'center',
                borderRadius: '10px',
                padding: '50px'
            }}>
                <Card sx={{width: 400}}>
                    <CardContent sx={{
                        '&:last-child': {pb: 2}
                    }}>
                        {children}
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}
