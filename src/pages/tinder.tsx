import dynamic from 'next/dynamic';

const ColocTinder = dynamic(() => import('../components/ColocTinder'), { ssr: false });

export default function TinderPage() {
  return (
    <div>
      <ColocTinder />
    </div>
  );
}