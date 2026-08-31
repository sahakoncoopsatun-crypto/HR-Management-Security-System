
        
        // ROLES & PERMISSIONS DEFINITION
        const ROLES = {
            CHAIRMAN: {
                id: 'ROLE_CHAIRMAN',
                name: 'ประธานกรรมการ',
                badgeColor: 'bg-rose-100 text-rose-700 border-rose-200',
                permissions: ['view_all_profiles', 'evaluate_committee', 'view_audit_logs']
            },
            COMMITTEE: {
                id: 'ROLE_COMMITTEE',
                name: 'คณะกรรมการประเมินผล',
                badgeColor: 'bg-purple-100 text-purple-700 border-purple-200',
                permissions: ['view_team_profiles', 'evaluate_managers']
            },
            ADMIN: {
                id: 'ROLE_ADMIN',
                name: 'HR Super Admin',
                badgeColor: 'bg-indigo-100 text-indigo-700 border-indigo-200',
                permissions: ['view_all_profiles', 'edit_all_profiles', 'manage_permissions', 'reset_password', 'view_all_salaries', 'approve_leaves', 'view_audit_logs']
            },
            MANAGER: {
                id: 'ROLE_MANAGER',
                name: 'Department Manager',
                badgeColor: 'bg-amber-100 text-amber-700 border-amber-200',
                permissions: ['view_own_profile', 'view_team_profiles', 'approve_leaves', 'view_own_salary']
            },
            EMPLOYEE: {
                id: 'ROLE_EMPLOYEE',
                name: 'General Employee',
                badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
                permissions: ['view_own_profile', 'request_leave', 'view_own_salary']
            }
        };

        // MOCK EMPLOYEES DATABASE
        let employeesDB = [
            {
                empId: 'EMP-999',
                userId: 'usr_999',
                fullName: 'สมภพ ยิ่งใหญ่',
                position: 'ประธานกรรมการบริหาร (CEO)',
                department: 'คณะกรรมการบริหาร',
                email: 'sompop.y@company.com',
                phone: '081-111-1111',
                role: 'CHAIRMAN',
                salary: 250000,
                otAllowance: 0,
                taxDeduction: 15000,
                ssoDeduction: 750,
                startDate: '2010-01-01',
                status: 'Active',
                mustChangePassword: false,
                passwordHash: 'Admin@1234',
                avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
                leaveQuota: { total: 20, used: 0, remaining: 20 }
            },
            {
                empId: 'EMP-888',
                userId: 'usr_888',
                fullName: 'ดาริกา พิเศษ',
                position: 'คณะกรรมการประเมินผล',
                department: 'คณะกรรมการตรวจสอบ',
                email: 'darika.p@company.com',
                phone: '082-222-2222',
                role: 'COMMITTEE',
                salary: 120000,
                otAllowance: 0,
                taxDeduction: 8000,
                ssoDeduction: 750,
                startDate: '2015-05-01',
                status: 'Active',
                mustChangePassword: false,
                passwordHash: 'Admin@1234',
                avatarUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80',
                leaveQuota: { total: 15, used: 2, remaining: 13 }
            },
            {
                empId: 'EMP-001',
                userId: 'usr_001',
                fullName: 'นพดล กิจเจริญ',
                position: 'ผู้จัดการฝ่ายทรัพยากรบุคคล',
                department: 'ฝ่ายบริหารบุคคล (HR)',
                email: 'nopadol.k@company.com',
                phone: '081-234-5678',
                role: 'ADMIN',
                salary: 75000,
                otAllowance: 3500,
                taxDeduction: 4200,
                ssoDeduction: 750,
                startDate: '2014-03-15', // Joined 12.4 years ago
                status: 'Active',
                mustChangePassword: false,
                passwordHash: 'Admin@1234',
                avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
                leaveQuota: { total: 15, used: 3, remaining: 12 }
            },
            {
                empId: 'EMP-002',
                userId: 'usr_002',
                fullName: 'วิภา สุวรรณรัตน์',
                position: 'หัวหน้าทีมบัญชีและการเงิน',
                department: 'การเงินและบัญชี',
                email: 'wipa.s@company.com',
                phone: '082-987-6543',
                role: 'MANAGER',
                salary: 58000,
                otAllowance: 2000,
                taxDeduction: 2800,
                ssoDeduction: 750,
                startDate: '2018-07-01', // Joined 8.1 years ago
                status: 'Active',
                mustChangePassword: false,
                passwordHash: 'Wipa#2026',
                avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
                leaveQuota: { total: 12, used: 4, remaining: 8 }
            },
            {
                empId: 'EMP-042',
                userId: 'usr_042',
                fullName: 'สมชาย ใจดี',
                position: 'เจ้าหน้าที่ธุรการทั่วไป',
                department: 'บริหารทั่วไป',
                email: 'somchai.j@company.com',
                phone: '089-111-2233',
                role: 'EMPLOYEE',
                salary: 28000,
                otAllowance: 1500,
                taxDeduction: 850,
                ssoDeduction: 750,
                startDate: '2021-05-10', // Joined 5.3 years ago
                status: 'Active',
                mustChangePassword: true, // Example forced change
                passwordHash: 'Pass1234',
                avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
                leaveQuota: { total: 10, used: 4, remaining: 6 }
            },
            {
                empId: 'EMP-043',
                userId: 'usr_043',
                fullName: 'กนกวรรณ มีสุข',
                position: 'นักพัฒนาระบบ (Software Engineer)',
                department: 'เทคโนโลยีสารสนเทศ (IT)',
                email: 'kanokwan.m@company.com',
                phone: '086-444-5555',
                role: 'EMPLOYEE',
                salary: 42000,
                otAllowance: 0,
                taxDeduction: 1500,
                ssoDeduction: 750,
                startDate: '2023-01-05', // Joined 3.6 years ago
                status: 'Active',
                mustChangePassword: false,
                passwordHash: 'Code2026!',
                avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
                leaveQuota: { total: 10, used: 2, remaining: 8 }
            }
        ];

        // DYNAMIC LEAVE TYPES LIST
        let leaveTypes = [
            { id: 'LT-01', name: 'ลาพักร้อน', desc: 'การหยุดพักผ่อนประจำปีตามสิทธิ์' },
            { id: 'LT-02', name: 'ลาป่วย', desc: 'กรณีเจ็บป่วย พร้อมใบรับรองแพทย์หากเกิน 3 วัน' },
            { id: 'LT-03', name: 'ลากิจส่วนตัว', desc: 'การธุระจำเป็นที่ไม่สามารถทำในวันหยุดได้' },
            { id: 'LT-04', name: 'ลาคลอด / เลี้ยงดูบุตร', desc: 'สิทธิ์การลาคลอดบุตรไม่เกิน 98 วัน' },
            { id: 'LT-05', name: 'ลาอุปสมบท / ประกอบพิธีฮัจญ์', desc: 'สิทธิ์การลาเพื่อพิธีกรรมทางศาสนา' }
        ];

        // LEAVE REQUESTS
        let leaveRequests = [
            {
                id: 'LV-101',
                empId: 'EMP-042',
                empName: 'สมชาย ใจดี',
                type: 'ลากิจส่วนตัว',
                startDate: '2026-08-25',
                endDate: '2026-08-25',
                days: 1,
                reason: 'ติดต่อทำใบขับขี่ที่ขนส่ง',
                status: 'Pending',
                appliedDate: '2026-08-18'
            },
            {
                id: 'LV-100',
                empId: 'EMP-042',
                empName: 'สมชาย ใจดี',
                type: 'ลาป่วย',
                startDate: '2026-08-02',
                endDate: '2026-08-03',
                days: 2,
                reason: 'มีไข้สูง ตัวร้อน พักผ่อนตามแพทย์สั่ง',
                status: 'Approved',
                appliedDate: '2026-08-01'
            },
            {
                id: 'LV-099',
                empId: 'EMP-002',
                empName: 'วิภา สุวรรณรัตน์',
                type: 'ลาพักร้อน',
                startDate: '2026-09-10',
                endDate: '2026-09-12',
                days: 3,
                reason: 'พักผ่อนประจำปี',
                status: 'Pending',
                appliedDate: '2026-08-19'
            }
        ];

        // PERFORMANCE EVALUATIONS MOCK
        let performanceEvaluations = [
            {
                id: 'EVAL-26-03',
                empId: 'EMP-002',
                empName: 'วิภา สุวรรณรัตน์ (ผู้จัดการ)',
                year: '2026',
                period: 'Mid-Year',
                selfScore: 8,
                selfComment: 'บริหารทีมให้บรรลุเป้าหมายได้ตามแผนที่วางไว้',
                managerScore: 0,
                managerComment: '',
                status: 'Pending Committee'
            },
            {
                id: 'EVAL-26-04',
                empId: 'EMP-888',
                empName: 'ดาริกา พิเศษ (คณะกรรมการ)',
                year: '2026',
                period: 'Mid-Year',
                selfScore: 9,
                selfComment: 'ตรวจสอบและพัฒนาระบบประเมินผลเสร็จสิ้น',
                managerScore: 0,
                managerComment: '',
                status: 'Pending Chairman'
            },
            {
                id: 'EVAL-26-01',
                empId: 'EMP-042',
                empName: 'สมชาย ใจดี',
                year: '2026',
                period: 'Mid-Year',
                selfScore: 8,
                selfComment: 'ทำงานเสร็จตามเป้าหมายที่ตั้งไว้ และเรียนรู้ระบบใหม่ได้เร็ว',
                managerScore: 8,
                managerComment: 'ผลงานดีตามมาตรฐาน มีความตั้งใจเรียนรู้งานใหม่ๆ แต่ต้องปรับปรุงเรื่องความรอบคอบเล็กน้อย',
                status: 'Completed'
            },
            {
                id: 'EVAL-26-02',
                empId: 'EMP-043',
                empName: 'กนกวรรณ มีสุข',
                year: '2026',
                period: 'Mid-Year',
                selfScore: 9,
                selfComment: 'พัฒนาระบบเสร็จก่อนกำหนด 2 สัปดาห์ และช่วยทีมลด bugs ลง 30%',
                managerScore: 0,
                managerComment: '',
                status: 'Pending Manager'
            }
        ];

        // AUDIT LOGS
        let auditLogs = [
            { timestamp: '2026-08-21 07:45:12', user: 'EMP-001 (นพดล)', action: 'LOGIN', details: 'เข้าสู่ระบบสำเร็จ' },
            { timestamp: '2026-08-20 16:30:00', user: 'EMP-001 (นพดล)', action: 'PASSWORD_RESET', details: 'ทำการรีเซ็ตรหัสผ่านให้ EMP-042 (สมชาย)' },
            { timestamp: '2026-08-19 09:12:44', user: 'EMP-042 (สมชาย)', action: 'LEAVE_REQUEST', details: 'ยื่นคำขอลาพักร้อนรหัส LV-101' }
        ];

        // CURRENT STATE
        let activeEmpId = 'EMP-042'; // Default starting user: Somchai (Employee)
        let activeTab = 'profile';


        // Helper: Get Current Active User Object
        function getCurrentUser() {
            return employeesDB.find(e => e.empId === activeEmpId) || employeesDB[0];
        }

        // Helper: Check Permission
        function hasPermission(permissionName) {
            const user = getCurrentUser();
            const roleObj = ROLES[user.role];
            return roleObj && roleObj.permissions.includes(permissionName);
        }

        // Switch Active Role Demo
        function switchUserRole(empId) {
            activeEmpId = empId;
            const user = getCurrentUser();
            
            // Log security event
            logAuditEvent(user.empId, 'ROLE_SWITCH', `สลับเข้าใช้ระบบด้วยสิทธิ์ ${ROLES[user.role].name}`);
            
            // Reset active tab if switching away from admin pages without permission
            if ((activeTab === 'admin-users' || activeTab === 'audit-logs') && !hasPermission('view_all_profiles')) {
                activeTab = 'profile';
            }

            renderSystemApp();
            showToast(`สลับการใช้งานเป็น: ${user.fullName} (${ROLES[user.role].name})`, 'info');
        }


        function renderSystemApp() {
            const currentUser = getCurrentUser();
            const roleObj = ROLES[currentUser.role];

            // Update Header User Info
            document.getElementById('current-user-avatar').src = currentUser.avatarUrl;
            document.getElementById('current-user-name').innerText = currentUser.fullName;
            document.getElementById('current-user-role-badge').innerText = roleObj.name;

            // Role chip in Top Header
            const chip = document.getElementById('role-status-chip');
            chip.className = `border text-xs px-2.5 py-1 rounded-full font-medium flex items-center gap-1 ${roleObj.badgeColor}`;
            chip.innerHTML = `<i class="fa-solid fa-user-shield text-[10px]"></i> สิทธิ์ระบบ: ${roleObj.name}`;

            // Check forced password banner
            const banner = document.getElementById('force-pwd-banner');
            if (currentUser.mustChangePassword) {
                banner.classList.remove('hidden');
            } else {
                banner.classList.add('hidden');
            }

            // Highlight active demo button
            ['btn-demo-emp', 'btn-demo-mgr', 'btn-demo-admin', 'btn-demo-com', 'btn-demo-ceo'].forEach(id => {
                document.getElementById(id).classList.remove('bg-indigo-600', 'border-indigo-400');
            });
            if (currentUser.empId === 'EMP-042') document.getElementById('btn-demo-emp').classList.add('bg-indigo-600', 'border-indigo-400');
            if (currentUser.empId === 'EMP-002') document.getElementById('btn-demo-mgr').classList.add('bg-indigo-600', 'border-indigo-400');
            if (currentUser.empId === 'EMP-001') document.getElementById('btn-demo-admin').classList.add('bg-indigo-600', 'border-indigo-400');
            if (currentUser.empId === 'EMP-888') document.getElementById('btn-demo-com').classList.add('bg-indigo-600', 'border-indigo-400');
            if (currentUser.empId === 'EMP-999') document.getElementById('btn-demo-ceo').classList.add('bg-indigo-600', 'border-indigo-400');

            // Render Sidebar Navigation depending on permissions
            renderSidebarNav();

            // Render Main View Content
            renderActiveView();
        }

        function renderSidebarNav() {
            const nav = document.getElementById('nav-menu');
            let html = '';

            // ESS Items (Everyone has these)
            html += `
                <div class="text-[11px] font-semibold text-slate-500 uppercase px-3 pt-2 pb-1">บริการตนเอง (ESS)</div>
                <button onclick="changeTab('profile')" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition ${activeTab === 'profile' ? 'sidebar-item-active' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}">
                    <i class="fa-solid fa-id-card text-base"></i> ข้อมูลโปรไฟล์ของฉัน
                </button>
                <button onclick="changeTab('leaves')" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition ${activeTab === 'leaves' ? 'sidebar-item-active' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}">
                    <i class="fa-solid fa-calendar-check text-base"></i> การลาและประเภทวันหยุด
                </button>
                <button onclick="changeTab('payslips')" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition ${activeTab === 'payslips' ? 'sidebar-item-active' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}">
                    <i class="fa-solid fa-file-invoice-dollar text-base"></i> สลิปเงินเดือน (Payslips)
                </button>
                <button onclick="changeTab('severance')" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition ${activeTab === 'severance' ? 'sidebar-item-active' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}">
                    <i class="fa-solid fa-calculator text-base text-amber-400"></i> ทดสอบคำนวณเงินบำเหน็จ
                </button>
                <button onclick="changeTab('evaluate-self')" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition ${activeTab === 'evaluate-self' ? 'sidebar-item-active' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}">
                    <i class="fa-solid fa-star text-base"></i> ประเมินผลงานของฉัน
                </button>
            `;

            // Admin / Manager Sections
            if (hasPermission('approve_leaves') || hasPermission('view_all_profiles') || hasPermission('evaluate_managers') || hasPermission('evaluate_committee')) {
                html += `
                    <div class="text-[11px] font-semibold text-slate-500 uppercase px-3 pt-4 pb-1">ส่วนผู้บริหาร / แอดมิน</div>
                `;

                if (hasPermission('approve_leaves')) {
                    const pendingCount = leaveRequests.filter(r => r.status === 'Pending').length;
                    html += `
                        <button onclick="changeTab('leave-approvals')" class="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition ${activeTab === 'leave-approvals' ? 'sidebar-item-active' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}">
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-check-double text-base"></i> อนุมัติการลา
                            </div>
                            ${pendingCount > 0 ? `<span class="bg-amber-500 text-slate-900 text-[10px] font-bold px-1.5 py-0.5 rounded-full">${pendingCount}</span>` : ''}
                        </button>
                    `;
                }

                if (hasPermission('approve_leaves') || hasPermission('evaluate_managers') || hasPermission('evaluate_committee')) {
                    const currentUser = getCurrentUser();
                    let evalCount = 0;
                    if (currentUser.role === 'MANAGER' || currentUser.role === 'ADMIN') evalCount = performanceEvaluations.filter(r => r.status === 'Pending Manager').length;
                    else if (currentUser.role === 'COMMITTEE') evalCount = performanceEvaluations.filter(r => r.status === 'Pending Committee').length;
                    else if (currentUser.role === 'CHAIRMAN') evalCount = performanceEvaluations.filter(r => r.status === 'Pending Chairman').length;
                    html += `
                        <button onclick="changeTab('evaluate-team')" class="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition ${activeTab === 'evaluate-team' ? 'sidebar-item-active' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}">
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-ranking-star text-base"></i> ประเมินผลทีมงาน
                            </div>
                            ${evalCount > 0 ? `<span class="bg-indigo-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">${evalCount}</span>` : ''}
                        </button>
                    `;
                }

                if (hasPermission('view_all_profiles')) {
                    html += `
                        <button onclick="changeTab('admin-users')" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition ${activeTab === 'admin-users' ? 'sidebar-item-active' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}">
                            <i class="fa-solid fa-users-gear text-base"></i> จัดการพนักงาน & สิทธิ์
                        </button>
                    `;
                }

                if (hasPermission('view_audit_logs')) {
                    html += `
                        <button onclick="changeTab('audit-logs')" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition ${activeTab === 'audit-logs' ? 'sidebar-item-active' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}">
                            <i class="fa-solid fa-shield-virus text-base"></i> บันทึกความปลอดภัย (Audit Logs)
                        </button>
                    `;
                }
            }

            nav.innerHTML = html;
        }

        function changeTab(tabName) {
            activeTab = tabName;
            renderSidebarNav();
            renderActiveView();
        }


        function renderActiveView() {
            const container = document.getElementById('view-container');
            const currentUser = getCurrentUser();

            if (activeTab === 'profile') {
                document.getElementById('page-title').innerText = 'ข้อมูลโปรไฟล์ส่วนบุคคล (ESS)';
                container.innerHTML = renderProfileView(currentUser);
            } else if (activeTab === 'leaves') {
                document.getElementById('page-title').innerText = 'ระบบจัดการวันลาและประเภทการลา';
                container.innerHTML = renderLeavesView(currentUser);
            } else if (activeTab === 'payslips') {
                document.getElementById('page-title').innerText = 'ประวัติสลิปเงินเดือน';
                container.innerHTML = renderPayslipsView(currentUser);
            } else if (activeTab === 'severance') {
                document.getElementById('page-title').innerText = 'ระบบคำนวณสิทธิเงินบำเหน็จ (Gratuity Benefit Calculator)';
                container.innerHTML = renderSeveranceView(currentUser);
            } else if (activeTab === 'leave-approvals') {
                document.getElementById('page-title').innerText = 'รายการรออนุมัติการลา (Manager View)';
                container.innerHTML = renderLeaveApprovalsView();
            } else if (activeTab === 'evaluate-self') {
                document.getElementById('page-title').innerText = 'ประเมินผลการปฏิบัติงาน (Self Assessment)';
                container.innerHTML = renderEvaluateSelfView(currentUser);
            } else if (activeTab === 'evaluate-team') {
                document.getElementById('page-title').innerText = 'ประเมินผลทีมงาน (Manager Assessment)';
                container.innerHTML = renderEvaluateTeamView();
            } else if (activeTab === 'admin-users') {
                document.getElementById('page-title').innerText = 'ระบบจัดการพนักงานและการกำหนดสิทธิ์ (Admin)';
                container.innerHTML = renderAdminUsersView();
            } else if (activeTab === 'audit-logs') {
                document.getElementById('page-title').innerText = 'บันทึกประวัติความปลอดภัย (Security Audit Logs)';
                container.innerHTML = renderAuditLogsView();
            }
        }

        // --- VIEW 1: MY PROFILE (ESS) ---
        function renderProfileView(user) {
            return `
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <!-- Left: Profile Card -->
                    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col items-center text-center">
                        <div class="relative mb-4">
                            <img src="${user.avatarUrl}" alt="Avatar" class="w-28 h-28 rounded-full object-cover border-4 border-indigo-50 shadow-md">
                            <span class="absolute bottom-1 right-1 bg-emerald-500 w-4 h-4 rounded-full border-2 border-white" title="สถานะปกติ"></span>
                        </div>
                        <h3 class="text-lg font-bold text-slate-800">${user.fullName}</h3>
                        <p class="text-xs text-indigo-600 font-semibold mt-0.5">${user.position}</p>
                        <p class="text-xs text-slate-500 mt-1">${user.department}</p>

                        <div class="w-full mt-6 pt-6 border-t border-slate-100 grid grid-cols-2 gap-3 text-left">
                            <div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <span class="text-[11px] text-slate-400 block">รหัสพนักงาน</span>
                                <span class="text-xs font-bold text-slate-700 font-mono">${user.empId}</span>
                            </div>
                            <div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <span class="text-[11px] text-slate-400 block">สถานะบัญชี</span>
                                <span class="text-xs font-bold text-emerald-600">${user.status}</span>
                            </div>
                        </div>

                        <div class="w-full mt-4">
                            <button onclick="openChangePasswordModal()" class="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-medium transition flex items-center justify-center gap-2 shadow-sm">
                                <i class="fa-solid fa-lock text-amber-400"></i> เปลี่ยนรหัสผ่านของฉัน
                            </button>
                        </div>
                    </div>

                    <!-- Right: Personal Details (Self-Service View) -->
                    <div class="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 space-y-6">
                        <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                            <div>
                                <h4 class="font-bold text-slate-800 text-base">ข้อมูลรายละเอียดส่วนบุคคล</h4>
                                <p class="text-xs text-slate-500">ข้อมูลของคุณได้รับการปกป้องตามนโยบายความเป็นส่วนตัว (PDPA)</p>
                            </div>
                            <button onclick="showToast('ส่งคำขอแก้ไขข้อมูลไปยัง HR เรียบร้อยแล้ว', 'info')" class="px-3 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 text-xs font-semibold rounded-lg transition border border-blue-200 flex items-center gap-1.5">
                                <i class="fa-solid fa-pen-to-square"></i> ยื่นขอแก้ไขข้อมูล
                            </button>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="text-xs text-slate-400 block mb-1">อีเมลองค์กร</label>
                                <div class="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 font-medium">${user.email}</div>
                            </div>
                            <div>
                                <label class="text-xs text-slate-400 block mb-1">เบอร์โทรศัพท์มือถือ</label>
                                <div class="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 font-medium">${user.phone}</div>
                            </div>
                            <div>
                                <label class="text-xs text-slate-400 block mb-1">บทบาทการเข้าถึงระบบ</label>
                                <div class="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-indigo-700 font-semibold">${ROLES[user.role].name}</div>
                            </div>
                            <div>
                                <label class="text-xs text-slate-400 block mb-1">ผู้บังคับบัญชาต้นสังกัด</label>
                                <div class="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 font-medium">วิภา สุวรรณรัตน์ (EMP-002)</div>
                            </div>
                        </div>

                        <!-- Financial / Confidential Block (Access Control Test) -->
                        ${hasPermission('view_own_salary') ? `
                            <div class="mt-6 pt-6 border-t border-slate-100">
                                <h5 class="text-sm font-bold text-slate-800 mb-4"><i class="fa-solid fa-sack-dollar text-emerald-500 mr-2"></i> ข้อมูลทางการเงิน (Confidential)</h5>
                                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                    <div class="bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                                        <span class="text-[10px] text-emerald-600 font-bold block uppercase mb-1">เงินเดือน (Base)</span>
                                        <span class="text-sm font-bold text-slate-800">฿${user.salary.toLocaleString()}</span>
                                    </div>
                                    <div class="bg-indigo-50 p-3 rounded-xl border border-indigo-100">
                                        <span class="text-[10px] text-indigo-600 font-bold block uppercase mb-1">เบี้ยเลี้ยง / OT</span>
                                        <span class="text-sm font-bold text-slate-800">฿${user.otAllowance.toLocaleString()}</span>
                                    </div>
                                    <div class="bg-rose-50 p-3 rounded-xl border border-rose-100">
                                        <span class="text-[10px] text-rose-600 font-bold block uppercase mb-1">หักภาษี (Tax)</span>
                                        <span class="text-sm font-bold text-slate-800">-฿${user.taxDeduction.toLocaleString()}</span>
                                    </div>
                                    <div class="bg-amber-50 p-3 rounded-xl border border-amber-100">
                                        <span class="text-[10px] text-amber-600 font-bold block uppercase mb-1">ประกันสังคม</span>
                                        <span class="text-sm font-bold text-slate-800">-฿${user.ssoDeduction.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }

        // --- VIEW 2: LEAVE MANAGEMENT & CUSTOM TYPES ---
        function renderLeavesView(user) {
            const myLeaves = leaveRequests.filter(r => r.empId === user.empId);
            const isAdminOrMgr = hasPermission('approve_leaves') || hasPermission('view_all_profiles');

            return `
                <div class="space-y-6">
                    <!-- Quota Cards & Leave Type Management Button -->
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
                            <div class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-4">
                                <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl">
                                    <i class="fa-solid fa-umbrella-beach"></i>
                                </div>
                                <div>
                                    <span class="text-xs text-slate-400 font-medium">สิทธิ์วันลาพักร้อนรวม</span>
                                    <h3 class="text-xl font-bold text-slate-800">${user.leaveQuota.total} วัน</h3>
                                </div>
                            </div>
                            <div class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-4">
                                <div class="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl">
                                    <i class="fa-solid fa-business-time"></i>
                                </div>
                                <div>
                                    <span class="text-xs text-slate-400 font-medium">ใช้ไปแล้ว</span>
                                    <h3 class="text-xl font-bold text-slate-800">${user.leaveQuota.used} วัน</h3>
                                </div>
                            </div>
                            <div class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-4">
                                <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl">
                                    <i class="fa-solid fa-circle-check"></i>
                                </div>
                                <div>
                                    <span class="text-xs text-slate-400 font-medium">คงเหลือสิทธิ์ยื่นลา</span>
                                    <h3 class="text-xl font-bold text-emerald-600">${user.leaveQuota.remaining} วัน</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Available Leave Types List Chip Section -->
                    <div class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <i class="fa-solid fa-tags text-indigo-600"></i>
                                <h4 class="font-bold text-slate-800 text-sm">ประเภทการลาที่มีในระบบปัจจุบัน (${leaveTypes.length} ประเภท)</h4>
                            </div>
                            ${isAdminOrMgr ? `
                                <button onclick="document.getElementById('modal-add-leave-type').classList.remove('hidden')" class="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold transition flex items-center gap-1.5 shadow-sm">
                                    <i class="fa-solid fa-plus"></i> เพิ่มประเภทการลาใหม่
                                </button>
                            ` : ''}
                        </div>
                        <div class="flex flex-wrap gap-2 pt-1">
                            ${leaveTypes.map(lt => `
                                <div class="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs flex flex-col gap-0.5 hover:border-indigo-300 transition">
                                    <span class="font-bold text-slate-800 flex items-center gap-1">
                                        <i class="fa-solid fa-circle-dot text-[8px] text-indigo-500"></i> ${lt.name}
                                    </span>
                                    <span class="text-[11px] text-slate-400">${lt.desc}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Leave Request Form & History Grid -->
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <!-- Submit Form -->
                        <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                            <h4 class="font-bold text-slate-800 text-base mb-4 flex items-center gap-2">
                                <i class="fa-solid fa-paper-plane text-indigo-600"></i> ยื่นใบลาออนไลน์
                            </h4>
                            <form onsubmit="handleApplyLeave(event)" class="space-y-4">
                                <div>
                                    <label class="text-xs font-semibold text-slate-700 block mb-1">เลือกประเภทการลา</label>
                                    <select id="leave-type" required class="w-full px-3 py-2.5 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none bg-white">
                                        ${leaveTypes.map(lt => `<option value="${lt.name}">${lt.name}</option>`).join('')}
                                    </select>
                                </div>
                                <div class="grid grid-cols-2 gap-2">
                                    <div>
                                        <label class="text-xs font-semibold text-slate-700 block mb-1">วันที่เริ่ม</label>
                                        <input type="date" id="leave-start" required class="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none">
                                    </div>
                                    <div>
                                        <label class="text-xs font-semibold text-slate-700 block mb-1">ถึงวันที่</label>
                                        <input type="date" id="leave-end" required class="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none">
                                    </div>
                                </div>
                                <div>
                                    <label class="text-xs font-semibold text-slate-700 block mb-1">เหตุผลการลา</label>
                                    <textarea id="leave-reason" required rows="3" class="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="ระบุเหตุผล..."></textarea>
                                </div>
                                <button type="submit" class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold transition shadow-md shadow-indigo-100">
                                    ส่งใบลาให้หัวหน้าอนุมัติ
                                </button>
                            </form>
                        </div>

                        <!-- History Table -->
                        <div class="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                            <h4 class="font-bold text-slate-800 text-base mb-4">ประวัติการยื่นขอลาของฉัน</h4>
                            <div class="overflow-x-auto">
                                <table class="w-full text-left text-xs">
                                    <thead class="bg-slate-50 text-slate-500 border-b border-slate-200">
                                        <tr>
                                            <th class="p-3">รหัสรายการ</th>
                                            <th class="p-3">ประเภท</th>
                                            <th class="p-3">ช่วงวันที่</th>
                                            <th class="p-3">จำนวนวัน</th>
                                            <th class="p-3">สถานะ</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-slate-100">
                                        ${myLeaves.length === 0 ? `<tr><td colspan="5" class="p-4 text-center text-slate-400">ยังไม่มีรายการยื่นลา</td></tr>` : ''}
                                        ${myLeaves.map(r => `
                                            <tr class="hover:bg-slate-50/80">
                                                <td class="p-3 font-mono font-bold text-slate-700">${r.id}</td>
                                                <td class="p-3 font-medium text-slate-800"><span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded font-semibold">${r.type}</span></td>
                                                <td class="p-3 text-slate-600">${r.startDate} ถึง ${r.endDate}</td>
                                                <td class="p-3 text-slate-600">${r.days} วัน</td>
                                                <td class="p-3">
                                                    ${r.status === 'Approved' ? '<span class="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-semibold">อนุมัติแล้ว</span>' : ''}
                                                    ${r.status === 'Pending' ? '<span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">รออนุมัติ</span>' : ''}
                                                    ${r.status === 'Rejected' ? '<span class="bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">ไม่อนุมัติ</span>' : ''}
                                                </td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // --- VIEW 3: PAYSLIPS ---
        function renderPayslipsView(user) {
            return `
                <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                    <div class="flex items-center justify-between mb-4 border-b border-slate-100 pb-4">
                        <h4 class="font-bold text-slate-800 text-base"><i class="fa-solid fa-file-invoice-dollar text-indigo-500 mr-2"></i> สลิปเงินเดือน (Payslips)</h4>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-xs">
                            <thead class="bg-slate-50 text-slate-500 border-b border-slate-200">
                                <tr>
                                    <th class="p-3">รอบเงินเดือน</th>
                                    <th class="p-3 text-right">เงินเดือน (Base)</th>
                                    <th class="p-3 text-right">รายได้อื่นๆ</th>
                                    <th class="p-3 text-right">รายการหัก</th>
                                    <th class="p-3 text-right font-bold">รับสุทธิ (Net)</th>
                                    <th class="p-3 text-center">การจัดการ</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100">
                                <tr class="hover:bg-slate-50">
                                    <td class="p-3 font-semibold text-slate-800">สิงหาคม 2569</td>
                                    <td class="p-3 text-right text-slate-600">฿${user.salary.toLocaleString()}</td>
                                    <td class="p-3 text-right text-emerald-600">+฿${user.otAllowance.toLocaleString()}</td>
                                    <td class="p-3 text-right text-rose-600">-฿${(user.taxDeduction + user.ssoDeduction).toLocaleString()}</td>
                                    <td class="p-3 text-right font-bold text-indigo-700">฿${(user.salary + user.otAllowance - user.taxDeduction - user.ssoDeduction).toLocaleString()}</td>
                                    <td class="p-3 text-center">
                                        <button onclick="openPayslipModal('${user.empId}')" class="px-3 py-1.5 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-lg font-semibold text-[10px] transition">
                                            <i class="fa-solid fa-eye"></i> ดูสลิป
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        }
        // --- VIEW 3.5: GRATUITY / SEVERANCE BENEFIT CALCULATOR ---
        function calculateYearsOfService(startDateStr) {
            if (!startDateStr) return 1;
            const start = new Date(startDateStr);
            const now = new Date('2026-08-24'); // Fixed simulation reference date (August 2026)
            const diffTime = Math.abs(now - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            const years = (diffDays / 365.25).toFixed(1);
            return parseFloat(years);
        }

        function renderSeveranceView(user) {
            const actualYears = calculateYearsOfService(user.startDate);
            const baseSalary = user.salary;
            const calculatedGratuity = baseSalary * actualYears;

            return `
                <div class="space-y-6">
                    <!-- Formula Overview Banner -->
                    <div class="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-6 text-white shadow-lg">
                        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <span class="bg-amber-800/60 text-amber-100 text-xs px-2.5 py-1 rounded-full font-semibold border border-amber-400/30">
                                    <i class="fa-solid fa-coins"></i> สูตรคำนวณเงินบำเหน็จตอบแทน
                                </span>
                                <h3 class="text-xl font-bold mt-2">เงินบำเหน็จสุทธิ = ฐานเงินเดือนล่าสุด × อายุงาน (ปี)</h3>
                                <p class="text-xs text-amber-100 mt-1">ระบบทดสอบสิทธิการรับเงินบำเหน็จเพื่อวางแผนเกษียณและสิทธิประโยชน์ทางการเงินของบุคลากร</p>
                            </div>
                            <div class="bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 text-right">
                                <span class="text-xs text-amber-100 block">อัตราเงินบำเหน็จสะสมปัจจุบัน</span>
                                <span class="text-2xl font-bold text-amber-300">฿${Math.round(calculatedGratuity).toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <!-- Card 1: Employee Current Profile Calculation -->
                        <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                            <h4 class="font-bold text-slate-800 text-base flex items-center gap-2 border-b border-slate-100 pb-3">
                                <i class="fa-solid fa-user-check text-indigo-600"></i> ผลการคำนวณตามสิทธิ์ปัจจุบัน
                            </h4>
                            
                            <div class="space-y-3 text-xs">
                                <div class="flex justify-between items-center p-2.5 bg-slate-50 rounded-lg">
                                    <span class="text-slate-500">ชื่อพนักงาน:</span>
                                    <span class="font-bold text-slate-800">${user.fullName}</span>
                                </div>
                                <div class="flex justify-between items-center p-2.5 bg-slate-50 rounded-lg">
                                    <span class="text-slate-500">วันที่เริ่มงาน:</span>
                                    <span class="font-semibold text-slate-700">${user.startDate || '2020-01-01'}</span>
                                </div>
                                <div class="flex justify-between items-center p-2.5 bg-slate-50 rounded-lg">
                                    <span class="text-slate-500">อายุงานคำนวณได้:</span>
                                    <span class="font-bold text-indigo-600 font-mono">${actualYears} ปี</span>
                                </div>
                                <div class="flex justify-between items-center p-2.5 bg-slate-50 rounded-lg">
                                    <span class="text-slate-500">ฐานเงินเดือนล่าสุด:</span>
                                    <span class="font-bold text-emerald-600">฿${baseSalary.toLocaleString()} / เดือน</span>
                                </div>
                            </div>

                            <div class="p-4 bg-amber-50 rounded-xl border border-amber-200 space-y-1 text-center">
                                <span class="text-xs text-amber-700 font-semibold block">เงินบำเหน็จสุทธิที่จะได้รับ</span>
                                <p class="text-2xl font-bold text-amber-900 font-mono">฿${Math.round(calculatedGratuity).toLocaleString()} <span class="text-xs font-normal">บาท</span></p>
                                <span class="text-[11px] text-amber-600 block pt-1">(${baseSalary.toLocaleString()} บาท × ${actualYears} ปี)</span>
                            </div>
                        </div>

                        <!-- Card 2: Interactive Gratuity Simulator -->
                        <div class="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                                <div>
                                    <h4 class="font-bold text-slate-800 text-base flex items-center gap-2">
                                        <i class="fa-solid fa-sliders text-amber-500"></i> แบบทดสอบการจำลองเงินบำเหน็จ (Simulator)
                                    </h4>
                                    <p class="text-xs text-slate-500">ปรับเปลี่ยนฐานเงินเดือนและอายุงานเพื่อทดสอบผลลัพธ์ในอนาคต</p>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs font-semibold text-slate-700 mb-1">ฐานเงินเดือนล่าสุดที่ต้องการทดสอบ (บาท)</label>
                                    <div class="relative">
                                        <span class="absolute left-3 top-2.5 text-xs text-slate-400">฿</span>
                                        <input type="number" id="sim-salary" value="${baseSalary}" oninput="runSeveranceSimulation()" class="w-full pl-7 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 font-bold outline-none">
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-xs font-semibold text-slate-700 mb-1">อายุงานรวมที่ต้องการทดสอบ (ปี)</label>
                                    <input type="number" id="sim-years" step="0.5" value="${actualYears}" oninput="runSeveranceSimulation()" class="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 font-bold outline-none">
                                </div>
                            </div>

                            <!-- Live Calculation Result Card -->
                            <div class="bg-slate-900 text-white p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
                                <div>
                                    <span class="text-xs text-slate-400 block uppercase tracking-wider font-semibold">ประมาณการยอดเงินบำเหน็จทดสอบ</span>
                                    <div class="flex items-baseline gap-2 mt-1">
                                        <span id="sim-result-amount" class="text-3xl font-bold text-amber-400 font-mono">฿${Math.round(calculatedGratuity).toLocaleString()}</span>
                                        <span class="text-xs text-slate-300">บาท</span>
                                    </div>
                                </div>
                                <div class="text-right text-xs text-slate-400 space-y-1 border-t sm:border-t-0 sm:border-l border-slate-800 pt-3 sm:pt-0 sm:pl-4">
                                    <p id="sim-formula-detail" class="font-mono text-amber-200">สูตร: ${baseSalary.toLocaleString()} × ${actualYears}</p>
                                    <p class="text-[11px] text-slate-500">อ้างอิงนโยบายสวัสดิการเงินบำเหน็จตอบแทนของบริษัท</p>
                                </div>
                            </div>

                            <!-- Policy Guidelines Note -->
                            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1 text-slate-600">
                                <span class="font-bold text-slate-800 block flex items-center gap-1.5">
                                    <i class="fa-solid fa-circle-info text-blue-500"></i> หมายเหตุสิทธิประโยชน์ทางการเงิน:
                                </span>
                                <ul class="list-disc list-inside space-y-1 text-[11px] text-slate-500 pl-1">
                                    <li>การคำนวณนี้เป็นเพียงแบบทดสอบการรับเงินบำเหน็จเบื้องต้น (Estimated Severance Pay)</li>
                                    <li>เงินบำเหน็จจะคำนวณจากฐานเงินเดือนสุทธิไม่รวมค่า OT หรือค่าเบี้ยเลี้ยงอื่นๆ</li>
                                    <li>การจ่ายเงินจริงจะขึ้นอยู่กับเงื่อนไขสัญญาจ้างงานและการอนุมัติจากฝ่ายบริหาร</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Live Simulation Calculation function
        function runSeveranceSimulation() {
            const salaryInput = parseFloat(document.getElementById('sim-salary').value) || 0;
            const yearsInput = parseFloat(document.getElementById('sim-years').value) || 0;

            const totalGratuity = salaryInput * yearsInput;

            document.getElementById('sim-result-amount').innerText = '฿' + Math.round(totalGratuity).toLocaleString();
            document.getElementById('sim-formula-detail').innerText = `สูตร: ${salaryInput.toLocaleString()} บาท × ${yearsInput} ปี`;
        }

        // Helper: Create New Custom Leave Type
        function handleCreateLeaveType(e) {
            e.preventDefault();
            const name = document.getElementById('input-new-leave-typename').value.trim();
            const desc = document.getElementById('input-new-leave-desc').value.trim() || 'ประเภทการลาตามระเบียบองค์กร';

            if (!name) return;

            // Check duplicate
            if (leaveTypes.some(lt => lt.name === name)) {
                showToast('มีประเภทการลานี้อยู่ในระบบแล้ว', 'error');
                return;
            }

            const newLt = {
                id: 'LT-0' + (leaveTypes.length + 1),
                name: name,
                desc: desc
            };

            leaveTypes.push(newLt);
            const adminUser = getCurrentUser();
            logAuditEvent(adminUser.empId, 'ADD_LEAVE_TYPE', `เพิ่มประเภทการลาใหม่: ${name}`);

            closeModal('modal-add-leave-type');
            renderSystemApp();
            showToast(`เพิ่มประเภทการลา "${name}" เข้าสู่ระบบเรียบร้อยแล้ว`, 'success');
        }

        // --- VIEW 4: LEAVE APPROVALS (MANAGER/ADMIN) ---
        function renderLeaveApprovalsView() {
            return `
                <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                    <h4 class="font-bold text-slate-800 text-base mb-4">รายการคำขอรอการพิจารณาอนุมัติ</h4>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-xs">
                            <thead class="bg-slate-50 text-slate-500 border-b border-slate-200">
                                <tr>
                                    <th class="p-3">รหัส</th>
                                    <th class="p-3">พนักงาน</th>
                                    <th class="p-3">ประเภทการลา</th>
                                    <th class="p-3">ช่วงเวลา</th>
                                    <th class="p-3">เหตุผล</th>
                                    <th class="p-3">การจัดการ</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100">
                                ${leaveRequests.filter(r => r.status === 'Pending').length === 0 ? '<tr><td colspan="6" class="p-6 text-center text-slate-400">ไม่มีรายการคำขออนุมัติค้างอยู่</td></tr>' : ''}
                                ${leaveRequests.filter(r => r.status === 'Pending').map(r => `
                                    <tr>
                                        <td class="p-3 font-mono font-bold text-slate-700">${r.id}</td>
                                        <td class="p-3 font-semibold text-slate-800">${r.empName} (${r.empId})</td>
                                        <td class="p-3">${r.type}</td>
                                        <td class="p-3 text-slate-600">${r.startDate} ถึง ${r.endDate} (${r.days} วัน)</td>
                                        <td class="p-3 text-slate-500 max-w-xs truncate">${r.reason}</td>
                                        <td class="p-3 flex items-center gap-2">
                                            <button onclick="handleApproveLeave('${r.id}', 'Approved')" class="px-2.5 py-1 bg-emerald-600 text-white hover:bg-emerald-700 rounded font-semibold text-xs transition">อนุมัติ</button>
                                            <button onclick="handleApproveLeave('${r.id}', 'Rejected')" class="px-2.5 py-1 bg-red-600 text-white hover:bg-red-700 rounded font-semibold text-xs transition">ปฏิเสธ</button>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        }


        // --- VIEW 5: ADMIN USERS & RBAC MANAGEMENT ---
        function renderAdminUsersView() {
            return `
                <div class="space-y-6">
                    <div class="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                        <div class="flex items-center gap-2">
                            <i class="fa-solid fa-users-gear text-indigo-600 text-xl"></i>
                            <div>
                                <h4 class="font-bold text-slate-800 text-base">การจัดการพนักงานและสิทธิ์ผู้ใช้งาน</h4>
                                <p class="text-xs text-slate-500">กำหนดระดับสิทธิ์ (Role) และจัดการรหัสผ่านของพนักงานในระบบ</p>
                            </div>
                        </div>
                        <button onclick="showToast('เพิ่มพนักงานใหม่เปิดใช้งานในเวอร์ชันจริง', 'info')" class="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold transition flex items-center gap-1.5 shadow-md shadow-indigo-100">
                            <i class="fa-solid fa-user-plus"></i> เพิ่มพนักงานใหม่
                        </button>
                    </div>

                    <!-- User Directory Table -->
                    <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
                        <div class="overflow-x-auto">
                            <table class="w-full text-left text-xs">
                                <thead class="bg-slate-900 text-slate-300">
                                    <tr>
                                        <th class="p-3.5">รหัส / ชื่อพนักงาน</th>
                                        <th class="p-3.5">แผนก / ตำแหน่ง</th>
                                        <th class="p-3.5">สิทธิ์ระบบ (Role)</th>
                                        <th class="p-3.5">บังคับเปลี่ยนรหัส?</th>
                                        <th class="p-3.5 text-right">การจัดการความปลอดภัย</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-slate-100">
                                    ${employeesDB.map(emp => `
                                        <tr class="hover:bg-slate-50 transition">
                                            <td class="p-3.5">
                                                <div class="flex items-center gap-3">
                                                    <img src="${emp.avatarUrl}" class="w-8 h-8 rounded-full object-cover border border-slate-200">
                                                    <div>
                                                        <p class="font-bold text-slate-800">${emp.fullName}</p>
                                                        <p class="text-[11px] text-slate-400 font-mono">${emp.empId} • ${emp.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="p-3.5">
                                                <p class="font-medium text-slate-700">${emp.department}</p>
                                                <p class="text-[11px] text-slate-400">${emp.position}</p>
                                            </td>
                                            <td class="p-3.5">
                                                <select onchange="updateUserRole('${emp.empId}', this.value)" class="px-2 py-1 text-xs border border-slate-300 rounded-lg font-semibold bg-white focus:ring-2 focus:ring-indigo-500 outline-none">
                                                    <option value="EMPLOYEE" ${emp.role === 'EMPLOYEE' ? 'selected' : ''}>General Employee</option>
                                                    <option value="MANAGER" ${emp.role === 'MANAGER' ? 'selected' : ''}>Department Manager</option>
                                                    <option value="ADMIN" ${emp.role === 'ADMIN' ? 'selected' : ''}>HR Super Admin</option>
                                                    <option value="COMMITTEE" ${emp.role === 'COMMITTEE' ? 'selected' : ''}>คณะกรรมการประเมินผล</option>
                                                    <option value="CHAIRMAN" ${emp.role === 'CHAIRMAN' ? 'selected' : ''}>ประธานกรรมการ</option>
                                                </select>
                                            </td>
                                            <td class="p-3.5">
                                                ${emp.mustChangePassword ? 
                                                    '<span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold text-[10px]">ใช่ (รอนำไปใช้)</span>' : 
                                                    '<span class="text-slate-400 text-[11px]">ปกติ</span>'
                                                }
                                            </td>
                                            <td class="p-3.5 text-right space-x-1">
                                                <!-- Admin Reset Password Button -->
                                                <button onclick="openAdminResetPwdModal('${emp.empId}')" title="รีเซ็ตรหัสผ่าน" class="px-2.5 py-1.5 bg-amber-50 text-amber-700 hover:bg-amber-100 rounded-lg font-semibold border border-amber-200 transition">
                                                    <i class="fa-solid fa-key"></i> รีเซ็ตรหัสผ่าน
                                                </button>
                                            </td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `;
        }

        // --- VIEW: EVALUATE SELF ---
        function renderEvaluateSelfView(user) {
            const myEvals = performanceEvaluations.filter(e => e.empId === user.empId);
            
            return `
                <div class="space-y-6">
                    <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                        <div class="flex items-center justify-between mb-4 border-b border-slate-100 pb-4">
                            <div>
                                <h4 class="font-bold text-slate-800 text-base flex items-center gap-2">
                                    <i class="fa-solid fa-star text-indigo-600"></i> ประวัติการประเมินผลงาน
                                </h4>
                                <p class="text-xs text-slate-500 mt-1">ประเมินผลเพื่อการพัฒนาและปรับปรุงประสิทธิภาพการทำงาน</p>
                            </div>
                            <button onclick="showToast('ระบบจำลองการส่งฟอร์มประเมินตนเองแล้ว', 'info')" class="px-3.5 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg text-xs font-semibold transition shadow-sm flex items-center gap-1.5">
                                <i class="fa-solid fa-pen-to-square"></i> ทำแบบประเมินล่าสุด (Self-Review)
                            </button>
                        </div>
                        
                        <div class="space-y-4">
                            ${myEvals.length === 0 ? '<p class="text-center text-sm text-slate-400 py-4">ยังไม่มีประวัติการประเมิน</p>' : ''}
                            ${myEvals.map(e => `
                                <div class="p-4 rounded-xl border ${e.status === 'Completed' ? 'border-emerald-200 bg-emerald-50/30' : 'border-amber-200 bg-amber-50/30'} flex flex-col md:flex-row gap-4">
                                    <div class="min-w-[120px] text-center md:border-r border-slate-200 md:pr-4">
                                        <span class="block text-[10px] font-bold text-slate-400 uppercase">รอบประเมิน</span>
                                        <span class="block text-sm font-bold text-slate-700">${e.period} ${e.year}</span>
                                        <div class="mt-2 inline-block px-2 py-0.5 rounded text-[10px] font-bold ${e.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}">${e.status}</div>
                                    </div>
                                    <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div class="bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                                            <div class="flex justify-between items-start mb-2">
                                                <span class="text-xs font-semibold text-indigo-600"><i class="fa-solid fa-user"></i> ประเมินตนเอง</span>
                                                <span class="text-lg font-bold text-slate-800">${e.selfScore}<span class="text-[10px] text-slate-400 font-normal">/10</span></span>
                                            </div>
                                            <p class="text-xs text-slate-600 line-clamp-2">"${e.selfComment}"</p>
                                        </div>
                                        <div class="bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                                            <div class="flex justify-between items-start mb-2">
                                                <span class="text-xs font-semibold text-amber-600"><i class="fa-solid fa-user-tie"></i> หัวหน้าประเมิน</span>
                                                <span class="text-lg font-bold text-slate-800">${e.status === 'Completed' ? e.managerScore : '-'}<span class="text-[10px] text-slate-400 font-normal">/10</span></span>
                                            </div>
                                            <p class="text-xs text-slate-600 line-clamp-2 italic">${e.status === 'Completed' ? '"' + e.managerComment + '"' : 'รอการประเมินจากหัวหน้างาน'}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        // --- VIEW: EVALUATE TEAM (MANAGER) ---
        function renderEvaluateTeamView() {
            const currentUser = getCurrentUser();
            let targetStatus = 'Pending Manager';
            let title = 'รายการรอการประเมินจากหัวหน้างาน (สำหรับพนักงาน)';
            
            if (currentUser.role === 'COMMITTEE') {
                targetStatus = 'Pending Committee';
                title = 'รายการรอการประเมินจากคณะกรรมการ (สำหรับผู้จัดการ)';
            } else if (currentUser.role === 'CHAIRMAN') {
                targetStatus = 'Pending Chairman';
                title = 'รายการรอการประเมินจากประธาน (สำหรับคณะกรรมการ)';
            }

            const pendingEvals = performanceEvaluations.filter(e => e.status === targetStatus);
            const completedEvals = performanceEvaluations.filter(e => e.status === 'Completed');
            
            return `
                <div class="space-y-6">
                    <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                        <h4 class="font-bold text-slate-800 text-base mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                            <i class="fa-solid fa-clipboard-list text-amber-500"></i> ${title}
                        </h4>
                        
                        <div class="overflow-x-auto">
                            <table class="w-full text-left text-xs">
                                <thead class="bg-slate-50 text-slate-500 border-b border-slate-200">
                                    <tr>
                                        <th class="p-3">พนักงาน</th>
                                        <th class="p-3">รอบประเมิน</th>
                                        <th class="p-3 text-center">คะแนนตัวเอง</th>
                                        <th class="p-3">ความเห็นพนักงาน</th>
                                        <th class="p-3 text-center">จัดการ</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-slate-100">
                                    ${pendingEvals.length === 0 ? '<tr><td colspan="5" class="p-6 text-center text-slate-400">ไม่มีรายการรอประเมิน</td></tr>' : ''}
                                    ${pendingEvals.map(e => `
                                        <tr class="hover:bg-slate-50">
                                            <td class="p-3 font-semibold text-slate-800">${e.empName} <span class="text-[10px] text-slate-400 font-normal block">${e.empId}</span></td>
                                            <td class="p-3 font-mono text-slate-600">${e.period} ${e.year}</td>
                                            <td class="p-3 text-center font-bold text-indigo-600">${e.selfScore}/10</td>
                                            <td class="p-3 text-slate-500 max-w-xs truncate" title="${e.selfComment}">${e.selfComment}</td>
                                            <td class="p-3 text-center">
                                                <button onclick="showToast('เปิดหน้าต่างให้คะแนนพนักงาน (Demo)', 'info')" class="px-2.5 py-1.5 bg-amber-50 text-amber-600 hover:bg-amber-100 rounded border border-amber-200 font-semibold text-xs transition">
                                                    ให้คะแนน
                                                </button>
                                            </td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `;
        }

        // --- VIEW 6: AUDIT LOGS ---
        function renderAuditLogsView() {
            return `
                <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                    <div class="flex items-center justify-between">
                        <h4 class="font-bold text-slate-800 text-base">รายการบันทึกความปลอดภัยในระบบ (Security Logs)</h4>
                        <span class="text-xs text-slate-400">จัดเก็บประวัติตามมาตรฐานความปลอดภัย HRIS</span>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-xs">
                            <thead class="bg-slate-50 text-slate-500 border-b border-slate-200">
                                <tr>
                                    <th class="p-3">วัน-เวลา</th>
                                    <th class="p-3">ผู้ดำเนินการ</th>
                                    <th class="p-3">การกระทำ (Action)</th>
                                    <th class="p-3">รายละเอียดเพิ่มเติม</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 font-mono">
                                ${auditLogs.map(log => `
                                    <tr class="hover:bg-slate-50">
                                        <td class="p-3 text-slate-500">${log.timestamp}</td>
                                        <td class="p-3 font-semibold text-slate-800">${log.user}</td>
                                        <td class="p-3"><span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-bold">${log.action}</span></td>
                                        <td class="p-3 text-slate-600">${log.details}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        }


        // PASSWORD STRENGTH METER
        function checkPasswordStrength(val) {
            const bar = document.getElementById('pwd-strength-bar');
            const txt = document.getElementById('pwd-strength-text');

            if (!val) {
                bar.style.width = '0%';
                txt.innerText = 'ระดับความปลอดภัย: ไม่ระบุ';
                txt.className = 'text-[11px] text-slate-400';
                return;
            }

            let score = 0;
            if (val.length >= 8) score += 25;
            if (/[A-Z]/.test(val)) score += 25;
            if (/[0-9]/.test(val)) score += 25;
            if (/[^A-Za-z0-9]/.test(val)) score += 25;

            bar.style.width = score + '%';
            if (score <= 25) {
                bar.className = 'h-full bg-red-500 w-1/4 transition-all duration-300';
                txt.innerText = 'ระดับความปลอดภัย: อ่อนมาก (ควรมีอย่างน้อย 8 ตัวอักษร พิมพ์ใหญ่ ตัวเลข)';
                txt.className = 'text-[11px] text-red-500 font-medium';
            } else if (score <= 50) {
                bar.className = 'h-full bg-amber-500 w-2/4 transition-all duration-300';
                txt.innerText = 'ระดับความปลอดภัย: ปานกลาง';
                txt.className = 'text-[11px] text-amber-600 font-medium';
            } else {
                bar.className = 'h-full bg-emerald-500 w-full transition-all duration-300';
                txt.innerText = 'ระดับความปลอดภัย: แข็งแกร่งมาก';
                txt.className = 'text-[11px] text-emerald-600 font-medium';
            }
        }

        // Toggle Password Input Mask
        function togglePasswordVisibility(inputId, btn) {
            const input = document.getElementById(inputId);
            const icon = btn.querySelector('i');
            if (input.type === 'password') {
                input.type = 'text';
                icon.className = 'fa-solid fa-eye-slash';
            } else {
                input.type = 'password';
                icon.className = 'fa-solid fa-eye';
            }
        }

        // Modal Open / Close helpers
        function openChangePasswordModal() {
            document.getElementById('form-change-password').reset();
            checkPasswordStrength('');
            document.getElementById('modal-change-pwd').classList.remove('hidden');
        }

        function closeModal(modalId) {
            document.getElementById(modalId).classList.add('hidden');
        }

        // Self Password Change Handler
        function handleSelfPasswordChange(e) {
            e.preventDefault();
            const currUser = getCurrentUser();
            const currentInput = document.getElementById('input-current-pwd').value;
            const newPwd = document.getElementById('input-new-pwd').value;
            const confirmPwd = document.getElementById('input-confirm-pwd').value;

            if (currentInput !== currUser.passwordHash) {
                showToast('รหัสผ่านปัจจุบันไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง', 'error');
                return;
            }

            if (newPwd !== confirmPwd) {
                showToast('รหัสผ่านใหม่และการยืนยันรหัสผ่านไม่ตรงกัน', 'error');
                return;
            }

            // Save new password
            currUser.passwordHash = newPwd;
            currUser.mustChangePassword = false;

            logAuditEvent(currUser.empId, 'PASSWORD_CHANGE', 'เปลี่ยนรหัสผ่านส่วนตัวด้วยตนเองสำเร็จ');
            closeModal('modal-change-pwd');
            renderSystemApp();
            showToast('เปลี่ยนรหัสผ่านเรียบร้อยแล้ว!', 'success');
        }

        // Admin Reset Password Handler
        function openAdminResetPwdModal(empId) {
            const target = employeesDB.find(e => e.empId === empId);
            if (!target) return;

            document.getElementById('reset-target-emp-id').value = target.empId;
            document.getElementById('reset-target-emp-name').innerText = `พนักงาน: ${target.fullName} (${target.empId})`;
            generateRandomTempPassword();
            document.getElementById('modal-admin-reset-pwd').classList.remove('hidden');
        }

        function generateRandomTempPassword() {
            const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789#@!';
            let pwd = 'Temp#';
            for (let i = 0; i < 4; i++) {
                pwd += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            document.getElementById('input-temp-pwd').value = pwd;
        }

        function handleAdminPasswordReset(e) {
            e.preventDefault();
            const empId = document.getElementById('reset-target-emp-id').value;
            const tempPwd = document.getElementById('input-temp-pwd').value;
            const forceChange = document.getElementById('chk-force-change').checked;

            const target = employeesDB.find(e => e.empId === empId);
            if (target) {
                target.passwordHash = tempPwd;
                target.mustChangePassword = forceChange;

                const adminUser = getCurrentUser();
                logAuditEvent(adminUser.empId, 'ADMIN_PASSWORD_RESET', `รีเซ็ตรหัสผ่านชั่วคราวให้ ${target.fullName} (${target.empId})`);
                
                closeModal('modal-admin-reset-pwd');
                renderSystemApp();
                showToast(`รีเซ็ตรหัสผ่านสำเร็จ! รหัสผ่านชั่วคราวคือ: ${tempPwd}`, 'success');
            }
        }

        // Update User Role
        function updateUserRole(empId, newRole) {
            const target = employeesDB.find(e => e.empId === empId);
            if (target) {
                const oldRole = target.role;
                target.role = newRole;
                const adminUser = getCurrentUser();
                logAuditEvent(adminUser.empId, 'ROLE_UPDATE', `เปลี่ยนบทบาทของ ${target.fullName} จาก ${oldRole} เป็น ${newRole}`);
                showToast(`อัปเดตสิทธิ์ของ ${target.fullName} เป็น ${ROLES[newRole].name} แล้ว`, 'success');
                renderSystemApp();
            }
        }

        // Apply Leave Handler
        function handleApplyLeave(e) {
            e.preventDefault();
            const currUser = getCurrentUser();
            const type = document.getElementById('leave-type').value;
            const start = document.getElementById('leave-start').value;
            const end = document.getElementById('leave-end').value;
            const reason = document.getElementById('leave-reason').value;

            const newReq = {
                id: 'LV-' + (102 + leaveRequests.length),
                empId: currUser.empId,
                empName: currUser.fullName,
                type: type,
                startDate: start,
                endDate: end,
                days: 1,
                reason: reason,
                status: 'Pending',
                appliedDate: new Date().toISOString().split('T')[0]
            };

            leaveRequests.unshift(newReq);
            logAuditEvent(currUser.empId, 'LEAVE_SUBMIT', `ยื่นขอลา ${type} รหัส ${newReq.id}`);
            showToast('ยื่นใบลาเรียบร้อยแล้ว รอหัวหน้าพิจารณา', 'success');
            renderActiveView();
        }

        // Manager Leave Approval Handler
        function handleApproveLeave(reqId, newStatus) {
            const req = leaveRequests.find(r => r.id === reqId);
            if (req) {
                req.status = newStatus;
                const approver = getCurrentUser();
                logAuditEvent(approver.empId, 'LEAVE_DECISION', `${newStatus === 'Approved' ? 'อนุมัติ' : 'ปฏิเสธ'} คำขอลา ${req.id} ของ ${req.empName}`);
                showToast(`ดำเนินการ ${newStatus === 'Approved' ? 'อนุมัติ' : 'ปฏิเสธ'} คำขอเรียบร้อยแล้ว`, 'info');
                renderSystemApp();
            }
        }

        // Open Payslip Modal
        function openPayslipModal(empId) {
            const user = employeesDB.find(e => e.empId === empId) || getCurrentUser();
            const gross = user.salary + user.otAllowance;
            const deductions = user.taxDeduction + user.ssoDeduction;
            const netPay = gross - deductions;

            const content = document.getElementById('payslip-modal-content');
            content.innerHTML = `
                <div class="border-b border-slate-200 pb-4 flex justify-between items-start">
                    <div>
                        <h4 class="font-bold text-slate-800 text-sm">บริษัท สมาร์ท คอร์ปอเรชั่น จำกัด</h4>
                        <p class="text-xs text-slate-500">ใบแจ้งยอดเงินเดือนประจำเดือน สิงหาคม 2569</p>
                    </div>
                    <div class="text-right">
                        <span class="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2 py-1 rounded">EMP ID: ${user.empId}</span>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4 text-xs bg-slate-50 p-3 rounded-xl">
                    <div>
                        <span class="text-slate-400">ชื่อ-นามสกุล:</span>
                        <p class="font-bold text-slate-800">${user.fullName}</p>
                    </div>
                    <div>
                        <span class="text-slate-400">แผนก/ตำแหน่ง:</span>
                        <p class="font-medium text-slate-700">${user.department} / ${user.position}</p>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-6 text-xs">
                    <div>
                        <h5 class="font-bold text-emerald-700 border-b border-emerald-200 pb-1 mb-2">รายได้ (Earnings)</h5>
                        <div class="space-y-1.5">
                            <div class="flex justify-between text-slate-600"><span>เงินเดือนพื้นฐาน:</span> <span>฿${user.salary.toLocaleString()}</span></div>
                            <div class="flex justify-between text-slate-600"><span>ค่าล่วงเวลา (OT) / เบี้ยขยัน:</span> <span>฿${user.otAllowance.toLocaleString()}</span></div>
                            <div class="flex justify-between font-bold text-slate-800 pt-2 border-t border-slate-200"><span>รวมรายได้:</span> <span>฿${gross.toLocaleString()}</span></div>
                        </div>
                    </div>
                    <div>
                        <h5 class="font-bold text-red-700 border-b border-red-200 pb-1 mb-2">รายการหัก (Deductions)</h5>
                        <div class="space-y-1.5">
                            <div class="flex justify-between text-slate-600"><span>ภาษีเงินได้หัก ณ ที่จ่าย:</span> <span>฿${user.taxDeduction.toLocaleString()}</span></div>
                            <div class="flex justify-between text-slate-600"><span>ประกันสังคม:</span> <span>฿${user.ssoDeduction.toLocaleString()}</span></div>
                            <div class="flex justify-between font-bold text-slate-800 pt-2 border-t border-slate-200"><span>รวมรายการหัก:</span> <span>฿${deductions.toLocaleString()}</span></div>
                        </div>
                    </div>
                </div>

                <div class="bg-indigo-600 text-white p-4 rounded-xl flex justify-between items-center">
                    <div>
                        <span class="text-xs text-indigo-200 block">รายได้สุทธิ (Net Pay)</span>
                        <p class="text-xl font-bold">฿${netPay.toLocaleString()} บาท</p>
                    </div>
                    <i class="fa-solid fa-circle-check text-2xl text-emerald-400"></i>
                </div>
            `;
            document.getElementById('modal-payslip').classList.remove('hidden');
        }

        // Helper: Audit Logger
        function logAuditEvent(user, action, details) {
            const now = new Date();
            const timeStr = now.getFullYear() + '-' + 
                            String(now.getMonth() + 1).padStart(2, '0') + '-' + 
                            String(now.getDate()).padStart(2, '0') + ' ' + 
                            String(now.getHours()).padStart(2, '0') + ':' + 
                            String(now.getMinutes()).padStart(2, '0') + ':' + 
                            String(now.getSeconds()).padStart(2, '0');
            auditLogs.unshift({ timestamp: timeStr, user: user, action: action, details: details });
        }

        // Custom Toast Notification System
        function showToast(message, type = 'success') {
            const box = document.getElementById('toast-box');
            const icon = document.getElementById('toast-icon');
            const msg = document.getElementById('toast-message');

            msg.innerText = message;
            if (type === 'success') {
                icon.className = 'fa-solid fa-circle-check text-emerald-400 text-lg';
            } else if (type === 'error') {
                icon.className = 'fa-solid fa-circle-xmark text-red-400 text-lg';
            } else {
                icon.className = 'fa-solid fa-circle-info text-blue-400 text-lg';
            }

            box.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
            setTimeout(() => {
                box.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
            }, 3500);
        }

        // ON APP LOAD INITIALIZATION
        window.onload = function() {
            renderSystemApp();
        };
        // --- HR CHATBOT LOGIC ---
        let isChatOpen = false;

        function toggleChatbot() {
            const container = document.getElementById('chatbot-container');
            const btn = document.getElementById('chatbot-toggle-btn');
            const icon = btn.querySelector('i');
            
            isChatOpen = !isChatOpen;
            if (isChatOpen) {
                container.classList.remove('translate-y-10', 'opacity-0', 'pointer-events-none');
                icon.className = 'fa-solid fa-xmark text-2xl';
            } else {
                container.classList.add('translate-y-10', 'opacity-0', 'pointer-events-none');
                icon.className = 'fa-solid fa-message text-2xl';
            }
        }

        function handleChatInput(e) {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        }

        function appendMessage(text, isUser = false) {
            const container = document.getElementById('chatbot-messages');
            const msgDiv = document.createElement('div');
            msgDiv.className = `flex gap-2 ${isUser ? 'flex-row-reverse' : ''}`;
            
            if (isUser) {
                msgDiv.innerHTML = `
                    <div class="bg-indigo-600 text-white p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%]">
                        ${text}
                    </div>
                `;
            } else {
                msgDiv.innerHTML = `
                    <div class="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                        <i class="fa-solid fa-robot"></i>
                    </div>
                    <div class="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm text-slate-700 max-w-[85%]">
                        ${text}
                    </div>
                `;
            }
            
            container.appendChild(msgDiv);
            container.scrollTop = container.scrollHeight;
        }

        function sendChatMessage() {
            const input = document.getElementById('chatbot-input');
            const text = input.value.trim();
            if (!text) return;
            
            // 1. Show user message
            appendMessage(text, true);
            input.value = '';
            
            // 2. Simulate AI Processing Delay
            const container = document.getElementById('chatbot-messages');
            const typingDiv = document.createElement('div');
            typingDiv.id = 'ai-typing';
            typingDiv.className = 'flex gap-2';
            typingDiv.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    <i class="fa-solid fa-robot"></i>
                </div>
                <div class="bg-slate-100 p-3 rounded-2xl rounded-tl-none shadow-sm text-slate-500 max-w-[85%] flex gap-1 items-center">
                    <div class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                    <div class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                    <div class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                </div>
            `;
            container.appendChild(typingDiv);
            container.scrollTop = container.scrollHeight;
            
            // 3. Generate AI Response
            setTimeout(() => {
                typingDiv.remove();
                generateAIResponse(text);
            }, 1000 + Math.random() * 1000); // 1-2 sec delay
        }

        function generateAIResponse(query) {
            const currentUser = getCurrentUser();
            let response = '';
            query = query.toLowerCase();
            
            // Simple Intent Matching Simulation
            if (query.includes('ลา') || query.includes('วันลา') || query.includes('เหลือ')) {
                response = `คุณมีสิทธิ์ลาพักร้อนทั้งหมด <b>${currentUser.leaveQuota.total} วัน</b><br>ใช้ไปแล้ว <b>${currentUser.leaveQuota.used} วัน</b><br>คงเหลือใช้งานได้: <b class="text-indigo-600">${currentUser.leaveQuota.remaining} วัน</b> ครับ 😊`;
            } else if (query.includes('หัวหน้า') || query.includes('manager')) {
                // Determine manager based on role logic
                if (currentUser.role === 'EMPLOYEE') response = `หัวหน้างานสายตรงของคุณคือ <b>คุณวิภา สุวรรณรัตน์ (Manager)</b> ครับ`;
                else if (currentUser.role === 'MANAGER') response = `คุณรายงานตรงต่อ <b>คณะกรรมการประเมินผล</b> ครับ`;
                else response = `คุณเป็นระดับผู้บริหารระดับสูงครับ`;
            } else if (query.includes('เงินเดือน') || query.includes('สลิป') || query.includes('payslip')) {
                response = `สลิปเงินเดือนล่าสุดของคุณของรอบเดือนสิงหาคมพร้อมแล้วครับ สามารถดูรายละเอียดได้ที่แท็บ <b>"สลิปเงินเดือน (Payslips)"</b> ที่เมนูด้านซ้ายมือครับ`;
            } else if (query.includes('ประเมิน') || query.includes('kpi')) {
                response = `การประเมินผลรอบนี้เป็นรอบ Mid-Year 2026 ครับ กรุณาไปที่เมนู <b>"ประเมินผลงานของฉัน"</b> เพื่อทำการ Self-Review ภายในสิ้นเดือนนี้นะครับ`;
            } else {
                response = `ขออภัยครับ ผมเป็นเพียง Demo AI ยังไม่เข้าใจคำถามของคุณทั้งหมด 😅 ลองถามเกี่ยวกับ <b>"วันลา"</b>, <b>"เงินเดือน"</b> หรือ <b>"การประเมินผล"</b> ดูนะครับ`;
            }
            
            appendMessage(response, false);
        }

    