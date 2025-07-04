
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {useAppSelector } from "../redux/hook";
import { Button } from "@/components/ui/button"
// import { Table } from "@/components/ui/table";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { books } from "./allbook";
export default function home() {
    const {book} =useAppSelector((state)=>state.book);
    const currentbook=book[0]
    console.log(currentbook)
  return (
    <div >
    <div className="flex gap-2 justify">
          <h1>Home</h1>
      <h1>All Book</h1>
      <h1>Borrow Book</h1>
    </div>
      <div className="flex justify-center">
        {/* <Card className="w-[450px]">
            <CardHeader>

                <CardTitle>Title:{currentbook.title}</CardTitle>


              
    
    <CardDescription>Author:{currentbook.author}</CardDescription>
  <div className=" justify-between">
      <CardAction>Qty:{currentbook.copies}</CardAction>
    <CardAction>Stock:{currentbook.availability}</CardAction>
  </div>

  <CardContent>
    <p>Genre:{currentbook.genre}</p>
  </CardContent>
  <CardFooter>
    <p>Isbn No:{currentbook.isbn}</p>
  </CardFooter>
            </CardHeader>
        </Card> */}
      </div>


    <Table>
  <TableCaption>A list of your recent Book.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Title</TableHead>
      <TableHead>Author</TableHead>
      <TableHead>Genre</TableHead>
            <TableHead>Isbn</TableHead>
      <TableHead>Qty</TableHead>
      <TableHead>Stock</TableHead>

      <TableHead className="text-right">Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {books.map((book, index) => (
         <TableRow key={book.id || index}>

      <TableCell className="font-medium">{currentbook.title}</TableCell>
      <TableCell>{currentbook.author}</TableCell>
      <TableCell>{currentbook.genre}</TableCell>
       <TableCell>{currentbook.isbn}</TableCell>
      <TableCell>{currentbook.copies}</TableCell>
      <TableCell>{currentbook.availability}</TableCell>
     
      <TableCell className="text-right"><Button>Edit/Delete</Button></TableCell>
    </TableRow>
    ))}
  </TableBody>
</Table>
    </div>
  )
}
