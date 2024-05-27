import Error from "../../error";
import RoomDetails from "@/components/room/RoomDetails";

const getRooms = async (id: string) => {
  const res = await fetch(`${process.env.API_URL}/api/rooms/${id}`, {
    next: {
      tags: ["RoomDetails"],
    },
  });
  return res.json();
};

interface Props {
  params: {
    id: string;
  };
}
export default async function RoomDetailsPage({ params }: Props) {
  const data = await getRooms(params.id);
  if (data?.errMessage) {
    return <Error error={data} />;
  }
  return <RoomDetails data={data} />;
}

export async function generateMetadata({ params }: Props) {
  const data = await getRooms(params.id);
  return {
    title: data?.room?.name,
  };
}
