import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const priorityColors = {
  high: '#e57373',
  medium: '#ffb74d',
  low: '#81c784',
};

export default function Task({ task, onToggleComplete, onDelete, onEdit, onPriorityChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    if (editedText.trim() !== '') {
      onEdit(task.id, editedText);
      setIsEditing(false);
    }
  };

  const getPriorityColor = (priority) => priorityColors[priority] || '#bdbdbd';

  const nextPriority = (current) => {
    if (current === 'high') return 'medium';
    if (current === 'medium') return 'low';
    return 'high';
  };

  return (
    <View style={[styles.taskContainer, { borderLeftColor: getPriorityColor(task.priority) }]}> 
      <TouchableOpacity onPress={() => onToggleComplete(task.id)} style={styles.checkbox}>
        {task.completed ? (
          <Ionicons name="checkmark-circle" size={24} color="#2196F3" />
        ) : (
          <Ionicons name="ellipse-outline" size={24} color="#bdbdbd" />
        )}
      </TouchableOpacity>
      {isEditing ? (
        <TextInput
          style={styles.editInput}
          value={editedText}
          onChangeText={setEditedText}
          onSubmitEditing={handleEdit}
          onBlur={handleEdit}
          autoFocus
        />
      ) : (
        <Text style={[styles.taskText, task.completed && styles.completedTaskText]}>{task.text}</Text>
      )}
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={() => onPriorityChange(task.id, nextPriority(task.priority))}
          style={styles.priorityButton}
        >
          <Ionicons name="flag" size={20} color={getPriorityColor(task.priority)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsEditing(true)} style={styles.actionButton}>
          <Ionicons name="pencil" size={20} color="#757575" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(task.id)} style={styles.actionButton}>
          <Ionicons name="trash" size={20} color="#e57373" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    borderLeftWidth: 6,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  checkbox: {
    marginRight: 12,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
    color: '#bdbdbd',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  actionButton: {
    marginLeft: 8,
  },
  priorityButton: {
    marginLeft: 0,
    marginRight: 4,
  },
  editInput: {
    flex: 1,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2196F3',
    color: '#333',
    paddingVertical: 2,
  },
}); 