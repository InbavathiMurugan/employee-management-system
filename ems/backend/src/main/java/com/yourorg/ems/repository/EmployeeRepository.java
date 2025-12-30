package com.yourorg.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yourorg.ems.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
