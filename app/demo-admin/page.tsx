import React from 'react';
import DemoAdminView from '@/components/admin/DemoAdminView';

export const metadata = {
  title: 'لوحة إدارة طلبات المواعيد (عرض تجريبي) | Mila Najd Admin Demo',
  description: 'عرض تجريبي تفاعلي لمالك مجمع ميلا نجد الطبي ومكتب الاستقبال لإدارة وتحديث حالات طلبات حجز المواعيد الواردة.',
};

export default function DemoAdminPage() {
  return <DemoAdminView />;
}
