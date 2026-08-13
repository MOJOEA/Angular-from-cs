import { Component, inject } from '@angular/core'; // 1. เติม inject ตรงนี้
import { RouterOutlet, RouterLink, Router} from '@angular/router'; 
import { AppData, Member as Mem } from '../../service/app-data';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [RouterOutlet, RouterLink], 
  templateUrl: './member.html',
  styleUrl: './member.css'
})
export class Member { 
  public appData = inject(AppData);
  
  constructor(
    private router: Router,
  ) {}

  addMember() {
    let newMember = new Mem();
    newMember.id = Math.floor(Math.random() * 100000); 
    newMember.fullname = `TADA KJ.`;
    newMember.image = `https://i.pravatar.cc/150?img=${newMember.id}`;
    this.appData.members.push(newMember);
    console.log(this.appData.members);
  }

  addMemberSession() {
    let members = [];
    if (sessionStorage.getItem('members')) {
      members = JSON.parse(sessionStorage.getItem('members')!);
    }
    let member = new Mem();
    member.id = this.appData.members[this.appData.members.length - 1]?.id;
    member.fullname = this.appData.members[this.appData.members.length - 1]?.fullname;
    member.image = this.appData.members[this.appData.members.length - 1]?.image;
    members.push(member);
    sessionStorage.setItem('members', JSON.stringify(members));
    console.log(sessionStorage.getItem('members'));
  }

  addMemberLocal() {
    let members = [];
    if (localStorage.getItem('members')) {
      members = JSON.parse(localStorage.getItem('members')!);
    }
    let member = new Mem();
    member.id = this.appData.members[this.appData.members.length - 1]?.id;
    member.fullname = this.appData.members[this.appData.members.length - 1]?.fullname;
    member.image = this.appData.members[this.appData.members.length - 1]?.image;
    members.push(member);
    localStorage.setItem('members', JSON.stringify(members));
    console.log(localStorage.getItem('members'));
  }

  clearAllMembersSession() {
    sessionStorage.removeItem('members');
  }
  clearAllMembersLocal() {
    localStorage.removeItem('members'); 
  }

  changePage1() {
    this.router.navigate(['member','list']);
  }
  
  changePage2() {
    this.router.navigate(['/member/profile']);
  }
  
  changePage3(id: number, userId: number, fullname: string) {
    this.router.navigate(['/member/test', id], { queryParams: { userId, fullname } });
  }
}
