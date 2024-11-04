import { faClock, faComment, faNewspaper } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, Container, Grid, List, ListItem, TextField, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

const BlogFull = () => {
    const location = useLocation()
    const blog = location.state.blog

    console.log(blog);

    return <>
        <Box overflow={'hidden'} marginTop={'60px'}>
            <Box
                sx={{
                    width: '100%',
                    height: '280px',
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
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    alignItems: 'center',
                    padding: '12px'
                }}>
                    <Box sx={{ marginLeft: { md: '150px' } }}>
                        <Box sx={{ display: 'flex', gap: '32px', color: 'white' }}>
                            <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <FontAwesomeIcon icon={faClock} />
                                <Typography fontSize={'18px'}>{blog.date}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <FontAwesomeIcon icon={faNewspaper} />
                                <Typography sx={{ fontSize: '18px' }}>{blog.author}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <FontAwesomeIcon icon={faComment} />
                                <Typography sx={{ fontSize: '18px' }}>{blog.comments}</Typography>
                            </Box>
                        </Box>
                        <Typography sx={{
                            color: 'white',
                            fontFamily: 'ArcaMajora, Arial, sans-serif',
                            fontWeight: 900,
                            fontSize: { xs: '26px', sm: '36px', md: '44px' }
                        }}>Pack wisely before traveling</Typography>
                    </Box>
                </Box>

            </Box>

            <Box sx={{ marginY: '100px', paddingX: { xs: '12px', sm: '50px', md: "12px" } }}>
                <Container disableGutters>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={8}>
                            <Box component="img" src={`/${blog.image}`} alt={`${blog.title}`} sx={{
                                width: '100%',
                            }}>

                            </Box>

                            <Typography sx={{ color: 'gray', marginTop: '32px' }}>
                                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.
                            </Typography>

                            <Typography sx={{
                                fontFamily: 'ArcaMajora, Arial, sans-serif',
                                fontWeight: 900,
                                fontSize: '24px',
                                marginY: '16px'
                            }}>
                                When, while the lovely valley teems with
                            </Typography>

                            <Typography sx={{ color: 'gray' }}>
                                vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us in an eternity of blist.
                            </Typography>

                            <Box sx={{ backgroundColor: '#f3f3f3', marginY: '24px', padding: '30px' }}>
                                <Typography sx={{ color: 'gray', fontSize: '18px', }}>
                                    I sink under the weight of the splendour of these visions!A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which
                                </Typography>
                            </Box>

                            <Typography sx={{ color: 'gray' }}>
                                I sink under the weight of the splendour of these visions!A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquis
                            </Typography>

                            <Typography sx={{
                                fontFamily: 'ArcaMajora, Arial, sans-serif',
                                fontWeight: 900,
                                fontSize: '20px',
                                marginY: '14px'
                            }}>
                                I throw myself down among the tall grass
                            </Typography>

                            <Typography sx={{ color: 'gray' }}>
                                I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and
                            </Typography>

                            <Box component="img" src={`/${blog.image}`} alt={`${blog.title}`} sx={{
                                width: '100%',
                                marginY: '32px'
                            }} />

                            <Typography sx={{
                                fontFamily: 'ArcaMajora, Arial, sans-serif',
                                fontWeight: 900,
                                fontSize: '18px',
                                marginY: '14px'
                            }}>
                                I throw myself down among the tall grass
                            </Typography>

                            <Typography sx={{ color: 'gray', marginY: '16px' }}>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Littl
                            </Typography>

                            <Box>
                                <List sx={{ color: 'gray' }}>
                                    <ListItem>
                                        Far far away, behind the word mountain
                                    </ListItem>
                                    <ListItem>
                                        When she reached the first hills
                                    </ListItem>
                                    <ListItem>
                                        A small river named Duden flows
                                    </ListItem>
                                    <ListItem>
                                        A small river named Duden flows by their plat.
                                    </ListItem>
                                    <ListItem>
                                        Far far away, behind the word mountain
                                    </ListItem>
                                </List>
                            </Box>

                            <Typography sx={{ color: 'gray', marginTop: '10px' }}>
                                Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their plate.
                            </Typography>

                            <Box sx={{ marginTop: '36px', backgroundColor: '#f3f3f3', paddingY: '50px', paddingX: '32px' }}>
                                <Typography sx={{
                                    fontFamily: 'ArcaMajora, Arial, sans-serif',
                                    fontWeight: 900,
                                    width: '100%',
                                    textAlign: 'center',
                                    letterSpacing: '3px'
                                }}>
                                    LEAVE A REPLY
                                </Typography>

                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Comment*"
                                            multiline
                                            rows={8}
                                            variant="outlined"
                                            fullWidth
                                            InputLabelProps={{
                                                sx: {
                                                    color: 'gray',
                                                    '&.Mui-focused': {
                                                        color: '#cd2c22',
                                                    },
                                                },
                                            }}
                                            sx={{
                                                marginTop: '28px', backgroundColor: 'white',
                                                '& .MuiOutlinedInput-root': {
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent'
                                                    },
                                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent'
                                                    },
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent'
                                                    },
                                                }
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField label="Name*" fullWidth
                                            InputLabelProps={{
                                                sx: {
                                                    color: 'gray',
                                                    '&.Mui-focused': {
                                                        color: '#cd2c22',
                                                    },
                                                },
                                            }}
                                            sx={{
                                                backgroundColor: 'white',
                                                '& .MuiOutlinedInput-root': {
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent'
                                                    },
                                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent'
                                                    },
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent'
                                                    },
                                                }
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField label="Email*" fullWidth
                                            InputLabelProps={{
                                                sx: {
                                                    color: 'gray',
                                                    '&.Mui-focused': {
                                                        color: '#cd2c22',
                                                    },
                                                },
                                            }}
                                            sx={{
                                                backgroundColor: 'white',
                                                '& .MuiOutlinedInput-root': {
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent'
                                                    },
                                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent'
                                                    },
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent'
                                                    },
                                                }
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField label="Website*" fullWidth
                                            InputLabelProps={{
                                                sx: {
                                                    color: 'gray',
                                                    '&.Mui-focused': {
                                                        color: '#cd2c22',
                                                    },
                                                },
                                            }}
                                            sx={{
                                                backgroundColor: 'white',
                                                '& .MuiOutlinedInput-root': {
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent'
                                                    },
                                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent'
                                                    },
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'transparent'
                                                    },
                                                }
                                            }}
                                        />
                                    </Grid>


                                </Grid>

                                <Box sx={{ textAlign: 'center', marginTop: '28px' }}>
                                    <Button sx={{
                                        backgroundColor: '#cd2c22', color: 'white',
                                        fontFamily: 'ArcaMajora, Arial, sans-serif',
                                        paddingY: '12px',
                                        paddingX: '20px',
                                        '&:hover': {
                                            backgroundColor: '#cd2c22',
                                        }
                                    }}>
                                        POST COMMENT
                                    </Button>
                                </Box>
                            </Box>
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
                                        }}>RECENT COMMENTS</Typography>

                                        {/* <Box sx={{ marginTop: '24px' }}>
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
                                        </Box> */}
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

export default BlogFull