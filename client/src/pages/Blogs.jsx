import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faComment, faNewspaper } from '@fortawesome/free-regular-svg-icons'
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const blogDescription = 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be...'

const blogs = [
    { id: 1, author: 'John Smith', title: 'Pack wisely before traveling', desc: blogDescription, image: 'blogs/blog-1.jpg', date: 'June 6, 2016', comments: 0 },
    { id: 3, author: 'John Smith', title: 'Introducing this amazing city', desc: blogDescription, image: 'blogs/blog-3.jpg', date: 'June 6, 2016', comments: 0 },
    { id: 4, author: 'John Smith', title: 'Change your place and get the fresh air', desc: blogDescription, image: 'blogs/blog-4.jpg', date: 'June 6, 2016', comments: 0 },
    { id: 5, author: 'John Smith', title: 'Pityful a rethoric question ran', desc: blogDescription, image: 'blogs/blog-5.jpg', date: 'June 6, 2016', comments: 0 },
]

const blogGrid = ['blogs/blog-grid-1.jpg', 'blogs/blog-grid-2.jpg', 'blogs/blog-grid-3.jpg',
    'blogs/blog-grid-4.jpg', 'blogs/blog-grid-5.jpg', 'blogs/blog-grid-6.jpg',
    'blogs/blog-grid-7.jpg', 'blogs/blog-grid-8.jpg', 'blogs/blog-grid-9.jpg'
]

const Blogs = () => {
    const navigate = useNavigate()

    const handleFullBlog = item => {
        navigate(`/blog/${item.id}`, { state: { blog: item } })
    }
    return <>
        <Box>
            <Box
                sx={{
                    width: '100%',
                    height: {
                        xs: '36vh',
                        sm: '46vh',
                        md: '56vh'
                    },
                    backgroundImage: 'url(/tours/bg-tour.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Box sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '12px'
                }}>
                </Box>

            </Box>

            <Box sx={{ marginY: '100px', paddingX: { xs: '12px', sm: '50px', md: "12px" } }}>
                <Container disableGutters>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={8}>
                            <Grid container spacing={4}>
                                {blogs && blogs.map((item, i) => <Grid key={i} item xs={12}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            image={item.image}
                                            alt={item.title}
                                        />

                                        <CardContent>
                                            <Box sx={{ padding: '28px' }}>
                                                <Box sx={{ display: 'flex', gap: '32px' }}>
                                                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                                        <FontAwesomeIcon icon={faClock} color='gray' fontSize={'16px'} />
                                                        <Typography sx={{ color: '#cd2c22', fontSize: '14px' }}>{item.date}</Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                                        <FontAwesomeIcon icon={faNewspaper} color='gray' fontSize={'16px'} />
                                                        <Typography sx={{ color: '#cd2c22', fontSize: '14px' }}>{item.author}</Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                                        <FontAwesomeIcon icon={faComment} color='gray' fontSize={'16px'} />
                                                        <Typography sx={{ color: '#cd2c22', fontSize: '14px' }}>{item.comments}</Typography>
                                                    </Box>
                                                </Box>

                                                <Box>
                                                    <Typography sx={{
                                                        marginTop: '10px',
                                                        fontFamily: 'ArcaMajora, Arial, sans-serif',
                                                        fontSize: '36px',
                                                        fontWeight: 900
                                                    }}>{item.title}</Typography>

                                                    <Typography sx={{
                                                        marginTop: '16px',
                                                        color: 'gray'
                                                    }}>{item.desc}</Typography>

                                                    <Button variant='contained' onClick={() => handleFullBlog(item)}
                                                        sx={{
                                                            marginTop: '32px',
                                                            backgroundColor: '#cd2c22',
                                                            fontWeight: 'bold',
                                                            paddingX: '24px',
                                                            paddingY: '10px',
                                                            "&:hover": {
                                                                backgroundColor: '#cd2c22'
                                                            }
                                                        }}>
                                                        Read More
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>)}
                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={4} >
                            <Box sx={{ height: '100%', position: 'relative' }}>
                                <Box sx={{ position: 'sticky', top: '90px' }}>
                                    <Box >
                                        <Typography sx={{
                                            fontFamily: 'ArcaMajora, Arial, sans-serif',
                                            fontWeight: 900,
                                            fontSize: '12px'
                                        }}>TEXT WIDGET</Typography>

                                        <Typography sx={{ marginTop: '24px', color: 'gray' }}>
                                            Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Etiam porta sem malesuada.
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography sx={{
                                            marginTop: '42px',
                                            fontFamily: 'ArcaMajora, Arial, sans-serif',
                                            fontWeight: 900,
                                            fontSize: '12px'
                                        }}>RECENT WORKS</Typography>

                                        <Box sx={{ marginTop: '24px' }}>
                                            <Grid container spacing={1}>
                                                {blogGrid && blogGrid.map((item, i) => <Grid key={i} item xs={4}>
                                                    <Box sx={{
                                                        backgroundImage: `url(${item})`,
                                                        backgroundSize: 'cover',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center',
                                                        height: '100px'
                                                    }}></Box>
                                                </Grid>)}
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    </>
}

export default Blogs