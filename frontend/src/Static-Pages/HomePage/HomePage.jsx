import React from "react";
import "./HomePage.css";
import { Flex, Box, Image, Grid, Button ,Text} from "@chakra-ui/react";
function HomePage() {
  return (
    <>
      
        <h1 className="Shophai"> Shop by Category</h1>
     

      {/* <div className='Newh'>

 </div> */}

      <Flex
        direction={{ base: "row", md: "row", sm: "column" }}
        h="auto"
        w="85%"
        gap="30px"
        border={"1px solid"}
        borderColor="red.500"
        margin={"auto"}
      >
        <Box w="200px" h={'100%'} >
          <Image
_hover={{
  opacity:'10',
}}
opacity='.8'
borderRadius='full'
  boxSize='100%'
  src='https://static.thcdn.com/images/small/webp/widgets/121-us/01/Page-001-025201.png'
/>
        </Box>
        <Box w="200px" h={'100%'} >
          <Image
_hover={{
  opacity:'10',
}}
opacity='.8'
borderRadius='full'
  boxSize='100%'
  src='https://static.thcdn.com/images/small/webp/widgets/121-us/09/Page-002-025209.png'
/>
        </Box>
        <Box w="200px" h={'100%'}>
          <Image
_hover={{
  opacity:'10',
}}
opacity='.8'
borderRadius='full'
  boxSize='100%'
  src='https://static.thcdn.com/images/small/webp/widgets/121-us/17/Page-003-025217.png'
/>
        </Box>
        <Box w="200px" h={'100%'}>
          <Image
_hover={{
  opacity:'10',
}}
opacity='.8'
borderRadius='full'
  boxSize='100%'
  src='https://static.thcdn.com/images/small/webp/widgets/121-us/21/Page-004-025221.png'
/>
        </Box>
        <Box w="200px" h={'100%'}>
          <Image
_hover={{
  opacity:'10',
}}
opacity='.8'
borderRadius='full'
  boxSize='100%'
  src='https://static.thcdn.com/images/small/webp/widgets/121-us/40/Page-005-025240.png'
/>
        </Box>
        <Box w="200px" h={'100%'}>
          <Image
_hover={{
  opacity:'10',
}}

opacity='.8'
borderRadius='full'
  boxSize='100%'
  src='https://static.thcdn.com/images/small/webp/widgets/121-us/58/Page-006-025258.png'
/>
        </Box>
      </Flex>
   
      <h1 className="Shophai"> Trending Offers</h1>
   

<Grid  
        border={"1px solid"}
        borderColor="red.500"
        margin={"auto"}
        width='90%'
        height={'auto'}
        templateRows='repeat(3, 1fr)'
  templateColumns='repeat(3, 1fr)'
        >
        
<Box w="97%" h={'95%'}  border={"1px solid"} 
        borderColor="red.500">
          <Image borderRadius='150%' src="https://static.thcdn.com/images/small/webp/widgets/121-us/39/17_1009_CucumberExtract_US17_1009_CucumberExtract_US-014239.jpg" width={'100%'}
             height='75%' />
          <Text>dfdfd</Text>
           <p>sdfsdgdgdgsgddd</p>
           <p>efadgdsffffffff</p>
<p>dfaaaaaaaaaa</p>
        
        </Box>
<Box w="97%" h={'95%'}  border={"1px solid"}
        borderColor="red.500">
          <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/39/0712-STDCRE-38046-SS-MH-Photography-July-22-REMAINING-BATCHING-Shot8-600x600-063639.png" width={'100%'}
             height='75%' borderRadius='150%' />
          <Text>dfdfd</Text>
           <p>sdfsdgdgdgsgddd</p>
           <p>efadgdsffffffff</p>
<p>dfaaaaaaaaaa</p>
        </Box>
<Box w="97%" h={'95%'}  border={"1px solid"} 
        borderColor="red.500">
          <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/27/SkinStore_Q4_Photography_2022_-_October_-_THG0035163_-_BATCHING_shot8600x600-090227.jpg" width={'100%'}
             height='75%' borderRadius='150%' />
        
          <Text>dfdfd</Text>
           <p>sdfsdgdgdgsgddd</p>
           <p>efadgdsffffffff</p>
<p>dfaaaaaaaaaa</p>
        </Box>
<Box w="97%" h={'95%'} border={"1px solid"} 
        borderColor="red.500">
          <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/10/0224-STDCRE-32153-SS-BME-Skinstore-March-2022-Photography-Batching-Shot_14-600x600-091010.jpg" width={'100%'}
             height='75%' borderRadius='150%' />
          <Text>dfdfd</Text>
           <p>sdfsdgdgdgsgddd</p>
           <p>efadgdsffffffff</p>
<p>dfaaaaaaaaaa</p>
        </Box>
<Box w="97%" h={'95%'} border={"1px solid"} 
        borderColor="red.500">
          <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/42/best_selling-064442.jpg" width={'100%'}
             height='75%' borderRadius='150%' />
          <Text>dfdfd</Text>
           <p>sdfsdgdgdgsgddd</p>
           <p>efadgdsffffffff</p>
<p>dfaaaaaaaaaa</p>
        </Box>
<Box w="97%" h={'95%'}  border={"1px solid"} 
        borderColor="red.500">
          <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/54/original-original-original-500x500-085431-083903-064454.jpg" width={'100%'}
             height='75%'borderRadius='150%'/>
          <Text>dfdfd</Text>
           <p>sdfsdgdgdgsgddd</p>
           <p>efadgdsffffffff</p>
<p>dfaaaaaaaaaa</p>
        </Box>
<Box w="97%" h={'95%'} border={"1px solid"}
        borderColor="red.500">
          <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/28/original-Screenshot_2022-03-07_141739-065628.png" width={'100%'}
             height='75%' borderRadius='150%'/>
         <Text>dfdfd</Text>
           <p>sdfsdgdgdgsgddd</p>
           <p>efadgdsffffffff</p>
<p>dfaaaaaaaaaa</p>
        </Box>
<Box w="97%" h={'95%'}  border={"1px solid"} 
        borderColor="red.500">
          <Image src=" https://static.thcdn.com/images/small/webp/widgets/121-us/34/original-dhc.ss-061734.jpg" width={'100%'}
             height='75%'borderRadius='150%'></Image>
          <Text>dfdfd</Text>
           <p>sdfsdgdgdgsgddd</p>
           <p>efadgdsffffffff</p>
<p>dfaaaaaaaaaa</p>
        </Box>
<Box w="97%" h={'95%'}  border={"1px solid"} 
        borderColor="red.500">
          <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/23/original-perricone.ss-013423.jpg" width={'100%'}
             height='75%' borderRadius='150%'></Image>
          <Text>dfdfd</Text>
           <p>sdfsdgdgdgsgddd</p>
           <p>efadgdsffffffff</p>
<p>dfaaaaaaaaaa</p>
        </Box>


</Grid>

<h1 className="Shophai">What People Are Buying Right Now</h1>

<Grid  border={"1px solid"}
        borderColor="red.500"
        margin={"auto"}
        width='85%'
        height={'auto'}
        templateRows='repeat(1, 1fr)'
  templateColumns='repeat(4, 1fr)'>

<Box w={'100%'} gap='10px' h={'auto'} border='1px solid'  borderColor={'red.500'}

>
  <Image
  src="https://static.thcdn.com/images/small/webp//productimg/480/480/13524404-5734930150395321.jpg"
  alt=""
  boxSize={'70%'}
  width='90%'

  />
   <p>hekrjker</p>
  <p>jkerjkrj</p>
  <Button>SHOP NOW</Button>
</Box>
<Box  w={'100%'} gap='10px' h={'auto'} border='1px solid'  borderColor={'red.500'}>
  <Image
  src="https://static.thcdn.com/images/small/webp//productimg/480/480/12448076-8695002190173929.jpg"
  alt=""
  boxSize={'70%'}
  width='90%'

  />
   <p>erer</p>
  <p>rere</p>
  <Button>SHOP NOW</Button>
</Box>
<Box w={'100%'} gap='10px' h={'auto'} border='1px solid'  borderColor={'red.500'}>
  <Image
  src="https://static.thcdn.com/images/small/webp//productimg/480/480/13920999-1114993397470335.jpg"
  alt=""
  boxSize={'70%'}
  width='90%'

  />
   <p>erer</p>
  <p>erer</p>
  <Button>SHOP NOW</Button>
</Box>
<Box  w={'90%'} gap='5px' h={'auto'} border='1px solid'  borderColor={'red.500'}>
  <Image
  src="https://static.thcdn.com/images/small/webp//productimg/480/480/12358556-1974888087906815.jpg"
  alt=""
  boxSize={'70%'}
  width='90%'

  />
  <p>erer</p>
  <p>reer</p>
  <Button>SHOP NOW</Button>
</Box>





</Grid>

   
<Grid>
<Box></Box>
<Box></Box>
<Box></Box>
<Box></Box>
<Box></Box>
<Box></Box>

</Grid>


<h1 className="Shophai"> Over On the Blog</h1>
   

   <Grid  
   gap={'10px'}
           border={"1px solid"}
           borderColor="red.500"
           margin={"auto"}
           width='90%'
           height={'auto'}
           templateRows='repeat(1, 1fr)'
     templateColumns='repeat(3, 1fr)'
           >
           
   <Box w="100%" h={'95%'}  border={"1px solid"} 
           borderColor="red.500">
             <Image borderRadius='150%' src="https://static.thcdn.com/images/small/webp/widgets/121-us/06/original-SkinC_Ferulic-034413-012406.jpg" 
             width={'100%'}
             height='75%'
              />

             <Text>dfdfd</Text>
           <p>sdfsdgdgdgsgddd</p>
           <p>efadgdsffffffff</p>
<p>dfaaaaaaaaaa</p>
           </Box>
   <Box w="100%" h={'95%'}  border={"1px solid"}
           borderColor="red.500">
             <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/51/original-0224-STDCRE-32153-SS-BME-Skinstore-March-2022-Photography-Batching-Shot_13-500x500-023351.jpg"  width={'100%'}
             height='75%'borderRadius='150%' />
           <p>sdfsdgdgdgsgddd</p>
           <p>efadgdsffffffff</p>
<p>dfaaaaaaaaaa</p>
           </Box>
   <Box w="100%" h={'95%'}  border={"1px solid"} 
           borderColor="red.500">
             <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/16/original-NB-IMAGE-5---2022-SKINSTORE-LANDING-PAGE-025016.jpg"  width={'100%'}
             height='75%' borderRadius='150%' />
           <p>sdfsdgdgdgsgddd</p>
           <p>efadgdsffffffff</p>
<p>dfaaaaaaaaaa</p>
           </Box>
   
   
   </Grid>





   
   
    </>
  );
}

export default HomePage;
