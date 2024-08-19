import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";


function Portfolio() {
  return (
      <div >
        <Box>
          <TableContainer component={Paper} >
            <Table aria-label="Portfolio table" className='' sx={{ justifyContent: 'space-between'}}>

              {/* PERSONAL INFO */}
              <Table aria-label="Personal Info" >

                <TableHead>
                  <TableCell className=' w-[30%] text-xl'>Personal Information</TableCell>
                  <TableCell className=' w-[30%]'></TableCell>
                  <TableCell className=' w-[30%]'></TableCell>
                </TableHead>
                <TableBody>
                  <TableRow >
                    <TableCell className='font-bold w-[10%]' sx={{ justifyContent: 'space-between'}} >Title</TableCell>
                    <TableCell>#place holder</TableCell>
                    <TableCell className='font-bold w-[10%]'>Last Name</TableCell>
                    <TableCell>#place holder</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-bold'>Other Names</TableCell>
                    <TableCell >#place holder</TableCell>
                    <TableCell className='font-bold'>Gender</TableCell>
                    <TableCell>#place holder</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-bold'>Date of Birth</TableCell>
                    <TableCell>#place holder</TableCell>
                    <TableCell className='font-bold'>Marital status</TableCell>
                    <TableCell>#place holder</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-bold'>Id type</TableCell>
                    <TableCell>#place holder</TableCell>
                    <TableCell className='font-bold'>Id Number</TableCell>
                    <TableCell>#place holder</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-bold'>Residential  address</TableCell>
                    <TableCell>#place holder</TableCell>
                    <TableCell className='font-bold'>Email address</TableCell>
                    <TableCell>#place holder</TableCell>
                  </TableRow>

                </TableBody>
              </Table>

              {/*EDUCATION TABLE*/}

              <Table>
                <span>EDUCATION</span>
                <TableHead>
                  <TableRow>
                    <TableCell className='font-bold text-xl'>Education</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  <TableRow className="">
                    <TableCell className='font-bold w-[25%]'>Level</TableCell>
                    <TableCell className='font-bold w-[25%]'>Qualification</TableCell>
                    <TableCell className='font-bold w-[25%]'>Institution</TableCell>
                    <TableCell className='font-bold w-[25%]'>Year</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='h-12' >#place holder</TableCell>
                    <TableCell >#place holder</TableCell>
                    <TableCell >#place holder</TableCell>
                    <TableCell>#place holder</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              {/*EMPLOYMENT TABLE*/}

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className='font-bold text-xl '>Employment History</TableCell>
                    <TableCell className='font-bold text-xl '></TableCell>
                    <TableCell className='font-bold text-xl '></TableCell>
                    <TableCell className='font-bold text-xl '></TableCell>
                    <TableCell className='font-bold text-xl '></TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className='font-bold'  >Position Held</TableCell>
                    <TableCell className='font-bold '>Name of Company</TableCell>
                    <TableCell className='font-bold '>Address</TableCell>
                    <TableCell className='font-bold '>Start date</TableCell>
                    <TableCell className='font-bold '>End date</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='' >#place holder</TableCell>
                    <TableCell >#place holder</TableCell>
                    <TableCell >#place holder</TableCell>
                    <TableCell>#place holder</TableCell>
                    <TableCell>#place holder</TableCell>

                  </TableRow>
                </TableBody>
              </Table>

              {/*PROFESSION TABLE*/}
              <Table>
                <TableHead >
                  <TableRow className=''>
                    <TableCell className='font-bold text-xl '>Professional Membership</TableCell>
                    <TableCell className='font-bold text-xl'></TableCell>

                  </TableRow>
                </TableHead>


                <TableBody>

                  <TableRow>
                    <TableCell className='font-bold' >Name of professional Body</TableCell>
                    <TableCell className='font-bold'>Type of Membership</TableCell>



                  </TableRow>
                  <TableRow>
                    <TableCell className='' >#place holder</TableCell>
                    <TableCell >#place holder</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              {/*REFERENCES TABLE*/}

              <Table>
                <TableHead >
                  <TableRow className=''>
                    <TableCell className='font-bold text-xl '>References</TableCell>
                    <TableCell className='font-bold text-xl'></TableCell>
                    <TableCell className='font-bold text-xl'></TableCell>
                    <TableCell className='font-bold text-xl'></TableCell>
                    <TableCell className='font-bold text-xl'></TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className='font-bold' >First Name</TableCell>
                    <TableCell className='font-bold'>Last Name</TableCell>
                    <TableCell className='font-bold' >Phone Number</TableCell>
                    <TableCell className='font-bold'>Residential Address</TableCell>
                    <TableCell className='font-bold' >Email Address</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='' >#Placeholder</TableCell>
                    <TableCell className=''>#Placeholder</TableCell>
                    <TableCell className='' >#Placeholder</TableCell>
                    <TableCell className=''>#Placeholder</TableCell>
                    <TableCell className='' >#Placeholder</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

            </Table>
          </TableContainer>
        </Box>
      </div>
  )
}

export default Portfolio