import { describe, it, expect } from 'vitest';
import { ACTION_ALL, matchRoles } from '../src/match-roles';

// describe('matchRoles', () => {
//   // Test case when userActions has ACTION_ALL
//   it('should return true if userActions contains ACTION_ALL', () => {
//     const actions = ['READ', 'WRITE', 'DELETE'];
//     const userActions = [ACTION_ALL.name];
//     const result = matchRoles(actions, userActions);
//     expect(result).toBe(true); // Expected true because user has ACTION_ALL which grants all permissions
//   });

//   // Test case when userActions matches one of the actions
//   it('should return true if userActions has one of the required actions', () => {
//     const actions = ['READ', 'WRITE', 'DELETE'];
//     const userActions = ['READ'];
//     const result = matchRoles(actions, userActions);
//     expect(result).toBe(true); // Expected true because user has 'READ' action
//   });

//   // Test case when userActions does not match any of the actions
//   it('should return false if userActions does not match any of the required actions', () => {
//     const actions = ['READ', 'WRITE', 'DELETE'];
//     const userActions = ['UPDATE'];
//     const result = matchRoles(actions, userActions);
//     expect(result).toBe(false); // Expected false because user has no matching actions
//   });

//   // Test case when userActions is empty
//   it('should return false if userActions is empty', () => {
//     const actions = ['READ', 'WRITE', 'DELETE'];
//     const userActions = [];
//     const result = matchRoles(actions, userActions);
//     expect(result).toBe(false); // Expected false because userActions is empty
//   });

//   // Test case when actions is empty
//   it('should return false if actions is empty and userActions does not have ACTION_ALL', () => {
//     const actions = [];
//     const userActions = ['READ'];
//     const result = matchRoles(actions, userActions);
//     expect(result).toBe(false); // Expected false because actions is empty
//   });
// });

describe('matchRoles', () => {
  // user มีที่สิทธิ์ ACTION_ALL ทำให้มีสิทธิ์ทุกรณี
  it('should return true when user has ACTION_ALL permission', () => {
    const actions = ['create', 'delete', 'update'];
    const userActions = [ACTION_ALL.name];
    expect(matchRoles(actions, userActions)).toBe(true);
  });

  // user มีที่สิทธิ์ ACTION_ALL และ action อื่นๆ ทำให้มีสิทธิ์ทุกรณี
  it('should return true regardless of other actions when user has ACTION_ALL', () => {
    const actions = ['create', 'delete'];
    const userActions = ['read', 'write', ACTION_ALL.name];
    expect(matchRoles(actions, userActions)).toBe(true);
  });

  // user มีสิทธิ์สำหรับ action ที่เจาะจง
  it('should return true when user has the required action', () => {
    const actions = ['create', 'delete', 'update'];
    const userActions = ['delete'];
    expect(matchRoles(actions, userActions)).toBe(true);
  });

  // ไม่มีสิทธิ์ในการใช้งาน
  it('should return false when user does not have any of the required actions', () => {
    const actions = ['create', 'delete', 'update'];
    const userActions = ['read'];
    expect(matchRoles(actions, userActions)).toBe(false);
  });

  // ไม่มีสิทธิ์ในการใช้งานในกรณีที่ user มีหลาย actions แต่ไม่ตรงกับสิทธิ์เลย
  it('should return false when user has actions but none match with required actions', () => {
    const actions = ['create', 'delete'];
    const userActions = ['read', 'write'];
    expect(matchRoles(actions, userActions)).toBe(false);
  });

  // user มีหลาย actions และมีอย่างน้อย 1 สิทธิ์ที่ใช้งานได้
  it('should return true when user has at least one matching action', () => {
    const actions = ['create', 'delete'];
    const userActions = ['delete', 'read'];
    expect(matchRoles(actions, userActions)).toBe(true);
  });

  // กรณีที่ไม่มีสิทธิ์ใดๆ ใน actions
  it('should return false when there are no required actions', () => {
    const actions = [];
    const userActions = ['read'];
    expect(matchRoles(actions, userActions)).toBe(false);
  });

  // user ไม่มีสิทธิ์อะไรเลย
  it('should return false when there are no required actions for user', () => {
    const actions = ['read'];
    const userActions = [];
    expect(matchRoles(actions, userActions)).toBe(false);
  });
});